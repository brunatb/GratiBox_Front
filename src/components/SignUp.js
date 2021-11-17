import StyledTitle from "../styles/StyledTitle"
import StyledDiv from "../styles/StyledDiv"
import StyledText from "../styles/StyledText"
import StyledButton from "../styles/StyledButton"
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function SignUp(){
    let navigate=useNavigate();
    return(
        <>
            <StyledTitle> Bem vindo ao GratiBox</StyledTitle>
            <StyledForm>
                <div className="inputs">
                    <input
                        type='text'
                        placeholder='Nome'
                    />
                    <input
                        type='email'
                        placeholder='Email'
                    />
                    <input
                        type='password'
                        placeholder='Senha'
                    />
                    <input
                        type='password'
                        placeholder='Confirmar senha'
                    />
                </div>
                <StyledDiv>
                    <StyledButton type='submit'>Cadastrar</StyledButton>
                    <StyledText onClick={()=> navigate("/sign-in")}>Já sou grato</StyledText>
                </StyledDiv>
            </StyledForm>
        </>
    )
}

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    height: 60vh;
    justify-content: space-between;
    align-items: center;

    & .inputs{
        display: flex;
        flex-direction: column;
        height: 289px;
        justify-content: space-around;
    }

    & input{
        width: 325px;
        height: 64px;
        border:none;
        border-radius: 10px;
        box-sizing: border-box;
        padding: 10px;
        font-size: 25px;
        font-weight: 500;
    }
`;