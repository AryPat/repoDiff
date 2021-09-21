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
  display: grid;
  width: 50%;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 5px 5px;
  grid-template-areas:
    "First First Enter"
    "Second Second Enter";
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
  width: 75%;
`;

const Second = styled.div`
  justify-self: end;
  align-self: center;
  grid-area: Second;

  background: #ffffff;
  border: 5px solid #f5f7fa;
  box-sizing: border-box;
  box-shadow: 0px 8px 24px #eff3f9;
  border-radius: 40px;
  padding: 1rem;
  width: 75%;
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
  width: 45%;
  height: 75%;

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
  const [second, setSecond] = useState("");

  useEffect(() => {
    first.length && second.length
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
        <Second>
          <input
            type="text"
            placeholder="second-repo/name-here"
            value={second}
            onChange={(e) => setSecond(e.target?.value)}
          ></input>
        </Second>
        <Enter enabled id="buttonControl" onClick={()=>{console.log("TODO")}}>
          Enter
        </Enter>
      </Buttons>
    </Container>
  );
}
