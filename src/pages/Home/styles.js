import styled, { keyframes, css } from "styled-components";

export const Container = styled.div`
    max-width: 700px;
    margin: 80px auto;
`
export const Search = styled.div`
    
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    padding: 30px;
    

    h1 {
        font-size: 20px;
        display: flex;
        align-items: center;
        gap: 10px;
    }

`

export const Form = styled.form`
    margin-top: 30px;
    display: flex;

    input {
        flex: 1;
        border: 1px solid #ddd;
        padding: 10px 15px;
        border-radius: 4px;
        font-size: 17px;
    }

`

const animate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`

export const SubmitButton = styled.button.attrs(props => ({
    type: 'submit',
    disabled: props.loading
}))`
    background: #0d2636;
    border: 0;
    border-radius: 4px;
    margin-left: 10px;
    padding: 0 15px;
    display: flex;
    justify-content: center;
    align-items: center;

    &[disabled]{
        cursor: not-allowed;
        opacity: 0.5;
    }

    ${props => props.loading &&
        css`
            svg{
                animation: ${animate} 2s linear infinite;
            }
        `
    }
`

export const List = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    margin-top: 50px;
    list-style: none;
    

    li {
      background: #fff;
      padding: 1rem;
      border-radius: 4px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      position: relative;

      a {
        position: absolute;
        right: 1rem;
        color: #0d2636;
      }
    }
`

export const CardHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #ddd;
    padding-bottom: 5px;
    span {
        text-align: center;
        font-size: 2rem;
    }
`

export const User = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        width: 80px;
        border: 2px solid #0d2636;
        border-radius: 50%;
    }

    h3 {
        margin-top: 5px;
    }

`

export const CardContent = styled.div`
    padding: 5px 0;
`

export const CardFooter = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid #ddd;
    padding-top: 5px;

    p {
        display: flex;
        align-items: center;
        gap: 8px;
    }
`

export const DeleteButton = styled.button.attrs({
    type: "button"
})`
    position: absolute;
    left: 5px;
    top: 5px;
    background: transparent;
    border: none;
    color: #0d2636;
`