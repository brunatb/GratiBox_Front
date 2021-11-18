import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import UserContext from "../context/UserContext";
import StyledDescription from "../styles/StyleDescription";
import StyledTitle from "../styles/StyledTitle";
import image from "../imgs/image03.jpg"

export default function Premium(){
    const {login, choosenPlan} = useContext(UserContext);
    const navigate=useNavigate();
    const [isPlanOpen, setIsPlanOpen]=useState("open")
    const [isDeliveryOpen, setIsDeliveryOpen]=useState("closed")
    const [isProductsOpen, setIsProductsOpen]=useState("closed")

    useEffect(()=>{
        if(!login) navigate("/")
        else if(login.user.planId) navigate("/plan");
    },[login,navigate])

    return (
        <>
            {login ?
            <>
                <StyledTitle> Bom te ver por aqui, {login.user.name}. </StyledTitle>
                <StyledDescription>
                    “Agradecer é arte de atrair coisas boas”
                </StyledDescription>
                <StyledCard>
                    <img src={image} alt=""/>
                    {isPlanOpen === 'open' ? 
                        <div className="open">
                            <span onClick={()=> setIsPlanOpen("closed")}>Plano</span>
                                {choosenPlan === 'month' ?
                                    <div>
                                        <div>
                                            <input type="radio" name="plan" id="month" checked="checked"/>
                                            <label for="month">Plano Mensal</label>
                                        </div>
                                        <div>
                                            <input type="radio" name="plan" id="week"/>
                                            <label for="week">Plano Semanal</label>
                                        </div>
                                    </div>
                                :
                                    <div>
                                        <div>
                                            <input type="radio" name="plan" id="month"/>
                                            <label for="month">Plano Mensal</label>
                                        </div>
                                        <div>
                                            <input type="radio" name="plan" id="week" checked="checked"/>
                                            <label for="week">Plano Semanal</label>
                                        </div>
                                    </div>

                                }
                        </div>
                    :
                        <div className="closed" onClick={()=> setIsPlanOpen("open")}>
                            <span>Plano</span>
                        </div>
                    }
                    {isDeliveryOpen === 'open' ? 
                        <div className="open">
                            <span onClick={()=> setIsDeliveryOpen("closed")}>Entrega</span>
                            <div>
                                <div>
                                    <input type="radio" name="delivery" id="monday"/>
                                    <label for="monday">Segunda-feira</label>
                                </div>
                                <div>
                                    <input type="radio" name="delivery" id="wednesday"/>
                                    <label for="wednesday">Quarta-feira</label>
                                </div>
                                <div>
                                    <input type="radio" name="delivery" id="friday"/>
                                    <label for="friday">Sexta-feira</label>
                                </div>
                            </div>
                        </div>
                    :
                        <div className="closed" onClick={()=> setIsDeliveryOpen("open")}>
                            <span>Entrega</span>
                        </div>
                    }
                    {isProductsOpen === 'open' ? 
                        <div className="open" >
                            <span onClick={()=> setIsProductsOpen("closed")}>Quero Receber</span>
                            <div>
                                <div>
                                    <input type="checkbox" name="products" id="tea"/>
                                    <label for="tea">Chás</label>
                                </div>
                                <div>
                                    <input type="checkbox" name="products" id="incense"/>
                                    <label for="incense">Incensos</label>
                                </div>
                                <div>
                                    <input type="checkbox" name="products" id="organicProduct"/>
                                    <label for="organicProduct">Produtos Orgânicos</label>
                                </div>
                            </div>
                        </div>
                    :
                        <div className="closed" onClick={()=> setIsProductsOpen("open")}>
                            <span>Quero Receber</span>
                        </div>
                    }
                </StyledCard>
            </>
            :
                <p>Carregando...</p>
            }
        </>
    )
}

const StyledCard = styled.div`
    width: 358px;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 350px;
    justify-content: space-between;
    border-radius: 15px;

    & img{
        width: 100%;
        height: 175px;
        object-fit: cover;
        border-radius: 10px 10px 0 0;
    }

    & .closed{
        width: 290px;
        height: 44px;
        background-color:  #E0D1ED9E;
        color:#4d65A8;
        font-size: 18px;
        font-weight: 700;
        box-sizing:border-box;
        padding: 10px;
        margin: 13px;
        border-radius: 5 px;
    }
    & .open{
        width: 290px;
        height: 110px;
        background-color:  #E0D1ED9E;
        color:#4d65A8;
        box-sizing:border-box;
        padding: 10px;
        margin: 13px;
        display: flex;
        flex-direction: column;
        border-radius: 5px;

        & label{
            font-size: 17px;
        }

        & div{
            display: flex;
            flex-wrap: wrap;

            & div{
                margin: 10px;
            }
        }

        & span{
            font-size: 18px;
            font-weight: 700;
        }
    }
`;