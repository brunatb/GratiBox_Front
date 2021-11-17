import styled from "styled-components";
import imagem from '../imgs/image05.webp';
import StyledButton from "../styles/StyledButton";
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
                Receba em casa um box com chás, produtos organicos, incensos e muito mais...
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