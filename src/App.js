import { useState } from "react";
import { Outlet } from "react-router";
import styled from "styled-components";
import UserContext from "./context/UserContext";
import { getFromLocalStorage } from "./utils/localStorage";
export default function App() {
  const [login, setLogin]= useState(getFromLocalStorage())
  return (
    <BodyApp>
      <UserContext.Provider value={{login,setLogin}}>
        <Outlet/>
      </UserContext.Provider>
    </BodyApp>
  );
}

const BodyApp = styled.div`
  width: 100%;
  min-height: 100vh;
  max-height: 100%;
  background-color: #6D7CE4;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  color:#FFFFFF;
  box-sizing: border-box;
  padding: 10px;
`;
