import { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router';
import UserContext from '../context/UserContext';
import StyledTitle from '../styles/StyledTitle';
import StyledDescription from '../styles/StyleDescription';
import weekImage from '../imgs/image02.jpg';
import monthImage from '../imgs/image04.jpg';

export default function Plans() {
  const { login, setChoosenPlan } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!login) navigate('/');
    else if (login.user.planId) navigate('/plan');
  }, [login, navigate]);

  return (
    <>
      {
                login
                  ? (
                    <>
                      <StyledTitle>
                        {' '}
                        Bom te ver por aqui,
                        {' '}
                        {login.user.name}
                        .
                        {' '}
                      </StyledTitle>
                      <StyledDescription>
                        Você ainda não assinou um plano, que tal começar agora?
                      </StyledDescription>
                      <StyledCard>
                        <img src={monthImage} alt="" />
                        <div>
                          <p>
                            Você recebe um box por semana.
                          </p>
                          <p>
                            Ideal para quem quer exercer a gratidão todos os dias.
                          </p>
                        </div>
                        <button onClick={async () => {
                          await setChoosenPlan('week');
                          navigate('/premium');
                        }}
                        >
                          Assinar
                        </button>
                      </StyledCard>
                      <StyledCard>
                        <img src={weekImage} alt="" />
                        <div>
                          <p>
                            Você recebe um box por mês.
                          </p>
                          <p>
                            Ideal para quem está começando agora.
                          </p>
                        </div>
                        <button onClick={async () => {
                          await setChoosenPlan('month');
                          navigate('/premium');
                        }}
                        >
                          Assinar
                        </button>
                      </StyledCard>
                    </>
                  )
                  : <p>Carregando...</p>
            }

    </>
  );
}

const StyledCard = styled.div`
width: 358px;
height: 400px;
background-color: #E5CDB3;
border-radius: 25px;
margin:20px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
    & img{
        width: 100%;
        height: 220px;
        object-fit: cover;
        border-radius: 20px 20px 0 0;
    }
    & p{
        width: 320px;
        color: #4D65A8;
        font-size: 18px;
        font-weight: 700;
    }
    & button{
        margin-bottom: 25px;
        background-color: #8C97EA;
        font-size: 24px;
        font-weight: 500;
        color: #FFFFFF;
        width: 170px;
        height: 40px;
        border: none;
        border-radius: 10px;
    }
`;
