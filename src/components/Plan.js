import { useContext, useEffect, useState } from "react"
import UserContext from "../context/UserContext"
import StyledDescription from "../styles/StyleDescription"
import StyledTitle from "../styles/StyledTitle"
import image from "../imgs/image03.jpg"
import styled from "styled-components"
import { getPlan } from "../services/API"
export default function Plan(){
    const {login} =useContext(UserContext)
    const [plan, setPlan] = useState({})

    useEffect(()=>{
        getPlan(login.token)
        .then(res=>{
            setPlan(res.data)
            console.log(res.data)
        })
        .catch(err=>{
            console.error(err)
        })
    },[login])

    return(
        <>
            {login && plan ?
                <>
                    <StyledTitle> Bom te ver por aqui, {login.user.name}. </StyledTitle>
                    <StyledDescription>"Agradecer é arte de atrair coisas boas"</StyledDescription>
                    <StyledCard>
                        <img src={image} alt=""/>
                        <p>Plano: {plan.type==="week" ? <>Semanal</> :<>Mensal</>}</p>
                        <p>Data da assinatura:{plan.date.split("T")[0]}</p>
                        <div>
                            {plan.tea ? <p>Chás</p>:<></>}
                            {plan.incense ? <p>Incensos</p>:<></>}
                            {plan.organicProducts ? <p>Produtos Organicos</p>:<></>}
                        </div>
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
    display: flex;
    flex-direction: column;
    color: blue;
    position: relative;

    & img{
        width: 100%;
        height: 172px;
        object-fit: cover;
        border-radius: 10px 10px 0 0;
    }
    & div{
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 25px;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
    & p{
        margin: 10px 0 0px 20px;
    }
`;