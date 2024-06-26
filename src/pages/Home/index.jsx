import { FaGithub, FaPlus, FaSpinner, FaBars } from 'react-icons/fa'
import { GoStar, GoRepoForked, GoX } from 'react-icons/go'
import { Container, Form, SubmitButton, List, Search, CardHeader, User, CardContent, CardFooter, DeleteButton } from "./styles";
import { useCallback, useState } from 'react';
import api from '../../services/api'

export default function Home() {
    const [newRepo, setNewRepo] = useState('')
    const [repositorios, setRepositorios] = useState([])
    const [loading, setLoading] = useState(false)

    const handleSubmit = useCallback((e) => {
        e.preventDefault()

        async function submit() {
            setLoading(true)

            try {
                const response = await api.get(`repos/${newRepo}`)

                const data = {
                    name: response.data.full_name,
                    description: response.data.description,
                    created_at: response.data.created_at,
                    forks: response.data.forks,
                    stars: response.data.stargazers_count,
                    avatar: response.data.organization.avatar_url,
                    login: response.data.organization.login
                }

                setRepositorios([...repositorios, data])
                setNewRepo('')

                console.log(response)
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }

        submit()
    }, [newRepo, repositorios])

    function handleinputChange(e) {
        setNewRepo(e.target.value)
    }

    const handleDelete = useCallback((repo) => {
        const find = repositorios.filter(r => r.name !== repo)
        setRepositorios(find)
    }, [repositorios])

    return (
        <Container>
            <Search>
                <h1>
                    <FaGithub size={25} />
                    Meus Repositorios
                </h1>

                <Form onSubmit={handleSubmit}>
                    <input
                        type='text'
                        placeholder='Adicionar Repositorios'
                        value={newRepo}
                        onChange={handleinputChange}
                    />

                    <SubmitButton loading={loading ? 1 : 0}>
                        {loading ? (
                            <FaSpinner color='fff' size={14} />
                        ) : (
                            <FaPlus color='#fff' size={14} />
                        )}
                    </SubmitButton>
                </Form>
            </Search>


            <List>
                {repositorios.map(repo => (
                    <li key={repo.name}>
                        <CardHeader>
                            <User>
                                <img src={repo.avatar} alt={repo.login} />
                                <h3>{repo.login}</h3>
                            </User>
                            <span>{repo.name}</span>
                            <div></div>
                        </CardHeader>
                        <CardContent>{repo.description}</CardContent>
                        <CardFooter>
                            <p><GoRepoForked size={20} /> {repo.forks}</p>
                            <p><GoStar size={20} /> {repo.stars}</p>
                            <p>{repo.created_at}</p>
                        </CardFooter>
                        <a href="">
                            <FaBars size={20} />
                        </a>
                        <DeleteButton onClick={() => handleDelete(repo.name)}>
                            <GoX size={20} />
                        </DeleteButton>
                    </li>
                ))}
            </List>
        </Container>
    )
}