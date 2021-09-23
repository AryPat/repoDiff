import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Typist from "react-typist";
import "./App.css";
import github from "./icons/github.svg";

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
  width: 50%;
  height: 90%;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background: #ffffff;
  border: 5px solid #f5f7fa;
  box-sizing: border-box;
  box-shadow: 0px 8px 24px #eff3f9;
  border-radius: 40px;
  padding: 1.5rem;
`;

const Sepearte = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 1.1rem;
`;

const Number = styled.div`
  font-size: 5vw;
  transform: translatex(-1.5rem);
`;

export default function App() {
  const [first, setFirst] = useState("");
  const [title, setTitle] = useState("")
  const [result, setResult] = useState({});
  const [percentage, setPercentage] = useState(60);
  const [gitHubLink, setGitHubLink] = useState("");

  let sample = {
    "Number of repo visits": 123,
    "Number of UNIQUE repo visits": 32256,
    "Number of repeat visits": 3242,
    "Number of open issues": 100,
    "Number of open pull requests": 3242,
    "Average time an issue is open": "542 mins",
    "Average time to merge a pull request": "42 mins",
    "Percent of issues that get closed": "40%",
  };

  useEffect(() => {
    console.log(Object.keys(result).length)
    first.length
      ? (document.getElementById("buttonControl").disabled = false)
      : (document.getElementById("buttonControl").disabled = true);

    setGitHubLink("https://github.com/" + first);
  }, [result, percentage, first]);

  // should fetch our data and update the result
  const fetchData = () => {
    setTitle(first)
    setResult({something:1})
  }

  return (
    <Container>
      <Typist cursor={{ show: false }} ms={5000} avgTypingSpeed={30000}>
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
        <Enter
          enabled
          id="buttonControl"
          onClick={() => {
            fetchData();
          }}
        >
          Enter
        </Enter>
      </Buttons>

      { Object.keys(result).length !== 0 && 
      <CardContainer>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            paddingLeft: "1rem",
            height: "17%",
          }}
        >
          <a href={first} target="__blank">
            <img
              style={{ transform: "translateY(0.1rem)" }}
              src={github}
              alt="logo"
              width="40rem"
              class="space"
            />
          </a>
          <h3 style={{ fontSize: "1.5rem", paddingLeft: "1rem" }}>{title}</h3>
        </div>

        <CardInfo>
          <Info>
            {Object.keys(sample).map(function (key, index) {
              return (
                <Sepearte>
                  <div>{key}</div>{" "}
                  <div style={{ color: "grey" }}>{sample[key]}</div>
                </Sepearte>
              );
            })}
          </Info>
          <Number>{percentage}%</Number>
        </CardInfo>
        
      </CardContainer>
      }
    </Container>
  );
}