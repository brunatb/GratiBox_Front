import { useContext } from "react"
import UserContext from "../context/UserContext"
import StyledDescription from "../styles/StyleDescription"
import StyledTitle from "../styles/StyledTitle"
import image from "../imgs/image03.jpg"
import styled from "styled-components"
export default function Plan(){
    const {login} =useContext(UserContext)

    return(
        <>
            {login ?
                <>
                    <StyledTitle> Bom te ver por aqui, {login.user.name}. </StyledTitle>
                    <StyledDescription>"Agradecer é arte de atrair coisas boas"</StyledDescription>
                    <StyledCard>
                        <img src={image} alt=""/>

                    </StyledCard>
                </>
            :
                <>
                    Carregando...
                </>
            }
        </>
    )
}
const StyledCard= styled.div`
    width: 356px;
    height: 382px;
    background-color: white;
    border-radius: 10px;

    & img{
        width: 100%;
        height: 172px;
        object-fit: cover;
        border-radius: 10px 10px 0 0;
    }
`;