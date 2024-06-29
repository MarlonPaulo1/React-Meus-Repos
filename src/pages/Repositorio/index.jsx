import { Title } from "./styles";
import { useParams } from "react-router-dom";

export default function Repositorio({ match }) {

    const { repositorio } = useParams()

    return (
        <Title>
            {repositorio}
        </Title>
    )
}