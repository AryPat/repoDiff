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
  justify-content: space-evenly;
  align-items: space-evenly;
  width: 30%;
`;

const First = styled.div`
  justify-self: end;
  align-self: center;
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

const CardContainer = styled.div`
  width: 50%;
  height: 50%;
  display: flex;
  flex-direction: column;

  background: #ffffff;
  border: 5px solid #f5f7fa;
  box-sizing: border-box;
  box-shadow: 0px 8px 24px #eff3f9;
  border-radius: 20px;
  padding: 1rem;
  margin-top: 3rem;
`;

const CardInfo = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  
`;

const Info = styled.div`
  width:50%;
  height: 90%;
  
  background: #ffffff;
  border: 5px solid #f5f7fa;
  box-sizing: border-box;
  box-shadow: 0px 8px 24px #eff3f9;
  border-radius: 40px;
  padding: 1rem;

`;

const Number = styled.div`
  width: 100%;
  height: 100%;
`;

export default function App() {
  const [first, setFirst] = useState("");
  const [result, setResult] = useState({});
  const [percentage, setPercentage] = useState(0);
  const [gitHubLink, setGitHubLink] = useState("");

  useEffect(() => {
    first.length
      ? (document.getElementById("buttonControl").disabled = false)
      : (document.getElementById("buttonControl").disabled = true);
  }, [result, percentage]);

  return (
    <Container>
      <Typist cursor={{show: false}}  ms={5000} avgTypingSpeed={30000}>
        <Title>oBITuary</Title>
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

      <CardContainer>
        <h3 style={{fontSize: '1.5rem', paddingLeft: '1rem'}}>{first}</h3>
        <CardInfo>
          <Info>this is the information</Info>
          <number>{percentage}%</number>
        </CardInfo>
      </CardContainer>
      
    </Container>
  );
}
