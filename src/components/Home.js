import styled from "styled-components";
import imagem from '../imgs/image05.webp';
import StyledTitle from "../styles/StyledTitle";
import StyledText from "../styles/StyledText";
import StyledDiv from "../styles/StyledDiv";
import { useNavigate } from "react-router-dom";

export default function Home(){
    let navigate=useNavigate();

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
const StyledDescription = styled.span`
    width: 350px;
    font-size: 18px;
    font-weight: 300;
    line-height: 21.09px;
`;
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