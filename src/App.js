import { Outlet } from "react-router";
import styled from "styled-components";
export default function App() {
  return (
    <BodyApp>
      <Outlet/>
    </BodyApp>
  );
}

const BodyApp = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #6D7CE4;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  color:#FFFFFF;
`;
