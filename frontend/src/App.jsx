import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Typist from 'react-typist'
import "./App.css";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  font-family: "Francois One", sans-serif;
`;

const Title = styled.div`
  font-size: 4rem;
  margin: 2rem;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column; 
  width: 30%;
`;

const First = styled.div`
  justify-self: end;
  align-self: center;
  grid-area: First;

  background: #ffffff;
  border: 5px solid #f5f7fa;
  box-sizing: border-box;
  box-shadow: 0px 8px 24px #eff3f9;
  border-radius: 40px;
  padding: 1rem;
  width: 100%;
`;

const Enter = styled.button`
  justify-self: start;
  align-self: center;
  grid-area: Enter;

  background: #ffffff;
  border: 5px solid #f5f7fa;
  box-sizing: border-box;
  box-shadow: 0px 8px 24px #eff3f9;
  border-radius: 40px;
  padding: 1rem;
  margin-top: 1rem;
  width: 25%;
  height: 100%;

  &:disabled {
    opacity: 0.9;
    cursor: not-allowed;
  }

  &:enabled {
    &:hover {
      color: black;
      background: #e6e6e6;
      font-weight: bold;
      border: 5px solid #d2d2d4;
    }
  }
`;

export default function App() {
  const [first, setFirst] = useState("");

  useEffect(() => {
    first.length
      ? (document.getElementById("buttonControl").disabled = false)
      : (document.getElementById("buttonControl").disabled = true);
  });

  return (
    <Container>
      <Typist cursor={{show: false}}  ms={5000} avgTypingSpeed={30000}>
        <Title>Repo Comparer</Title>
      </Typist>
      
      <Buttons>
        <First>
          <input
            type="text"
            placeholder="first-repo/name-here"
            value={first}
            onChange={(e) => setFirst(e.target?.value)}
          ></input>
        </First>
        <Enter enabled id="buttonControl" onClick={()=>{console.log("TODO")}}>
          Enter
        </Enter>
      </Buttons>
    </Container>
  );
}
