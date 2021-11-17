import StyledTitle from "../styles/StyledTitle"
import StyledDiv from "../styles/StyledDiv"
import StyledText from "../styles/StyledText"
import StyledButton from "../styles/StyledButton"
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { postSignIn } from "../services/API";
import { useState } from "react";

export default function SignIn(){
    let navigate=useNavigate();
    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");

    function signIn(e){
        e.preventDefault();
        const body={email,password};
        postSignIn(body)
        .then(res =>{
            alert("Logado com Sucesso");
            navigate("/plans")
        })
        .catch(error => {
            if(error.response.status === 401) alert("Senha Incorreta");
            if(error.response.status === 404) alert("E-mail não cadastrado");
            else alert("Erro Desconhecido");
        })
    }
    return(
        <>
            <StyledTitle> Bem vindo ao GratiBox</StyledTitle>
            <StyledForm onSubmit={signIn}>
                <div className="inputs">
                    <input
                        type='email'
                        placeholder='Email'
                        value={email}
                        onChange={(e)=>{setEmail(e.target.value)}}
                        required
                    />
                    <input
                        type='password'
                        placeholder='Senha'
                        value={password}
                        onChange={(e)=>{setPassword(e.target.value)}}
                        required
                    />
                </div>
                <StyledDiv>
                    <StyledButton type='submit'>Login</StyledButton>
                    <StyledText onClick={()=> navigate("/sign-up")}>Ainda não sou grato</StyledText>
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

        & input{
            margin-bottom: 9px;
        }
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