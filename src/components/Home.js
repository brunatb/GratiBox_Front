import styled from "styled-components";
import imagem from '../imgs/image05.webp';
import StyledTitle from "../styles/StyledTitle";
import StyledText from "../styles/StyledText";
import StyledDiv from "../styles/StyledDiv";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import UserContext from "../context/UserContext";
import StyledDescription from "../styles/StyleDescription";

export default function Home(){
    let navigate=useNavigate();
    const {login} = useContext(UserContext);

    useEffect(()=>{
        if(login && !login.user.planId) navigate("/plans")
    },[login,navigate])

    return(
        <>
            <StyledTitle> Bem vindo ao GratiBox</StyledTitle>
            <StyledDescription>
                Receba em casa um box com chás, produtos orgânicos, incensos e muito mais...
            </StyledDescription>
            <StyledImg src={imagem} alt=""/>
            <StyledDiv>
                <StyledButton onClick={()=> navigate("/sign-up")}>Quero começar</StyledButton>
                <StyledText onClick={()=> navigate("/sign-in")}>Já sou grato</StyledText>
            </StyledDiv>
        </>
    )
}

const StyledImg = styled.img`
    max-height: 70vh;
    max-width: 100%;
`;

const StyledButton = styled.button`
    width: 210px;
    height: 48px;
    background-color: #8C97EA;
    border: none;
    border-radius: 10px;
    color: #FFFFFF;
    font-size: 18px;
    font-weight: 700;
`;