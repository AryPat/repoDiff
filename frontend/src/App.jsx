import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Typist from "react-typist";
import "./App.css";
import github from "./icons/github.svg";
import * as routes from "../route/route.jsx";

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

const Separate = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 1.1rem;
`;

const Titles = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 15%;
  justify-content: space-between;
`;

const Number = styled.div`
  font-size: 5vw;
  transform: translatex(-1.5rem);
`;

export default function App() {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [title, setTitle] = useState("");
  const [titleTwo, setTitleTwo] = useState("");
  const [result, setResult] = useState({});
  const [mapped, setMapped] = useState({});
  const [mappedTwo, setMappedTwo] = useState({});
  const [gitHubLink, setGitHubLink] = useState("");
  const [gitHubLinkTwo, setGitHubLinkTwo] = useState("");

  useEffect(() => {
    if (Object.keys(result).length !== 0) {
      setMapped({
        "Number of Pull Request": result.repoOne.pullRequests.pullRequests,
        "Number of Stars": result.repoOne.stargazers.stars,
        "Number of Issues": result.repoOne.totalIssues.totalIssues,
        "Number of Forks": result.repoOne.forks,
        "Primary Language": result.repoOne.primaryLanguage.primaryLanguage,
        "Number of Releases": result.repoOne.releases.releases,
        "Last Updated Time": result.repoOne.updatedAt,
      });

      setMappedTwo({
        "Number of Pull Request": result.repoTwo.pullRequests.pullRequests,
        "Number of Stars": result.repoTwo.stargazers.stars,
        "Number of Issues": result.repoTwo.totalIssues.totalIssues,
        "Number of Forks": result.repoTwo.forks,
        "Primary Language": result.repoTwo.primaryLanguage.primaryLanguage,
        "Number of Releases": result.repoTwo.releases.releases,
        "Last Updated Time": result.repoTwo.updatedAt,
      });
    }
  }, [result]);

  useEffect(() => {
    console.log(mapped);
    first.length && second.length
      ? (document.getElementById("buttonControl").disabled = false)
      : (document.getElementById("buttonControl").disabled = true);

    setGitHubLink("https://github.com/" + first);
    setGitHubLinkTwo("https://github.com/" + second)
  }, [first, second]);

  const onSubmit = async () => {
    let { data } = await routes.fetchRepoInformation(
      first.split("/")[0],
      first.split("/")[1],
      second.split("/")[0],
      second.split("/")[1]
    );
    setResult(data);
    setTitleTwo(second);
    setTitle(first);
  };

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
        <First>
          <input
            type="text"
            placeholder="Second-repo/name-here"
            value={second}
            onChange={(e) => setSecond(e.target?.value)}
          ></input>
        </First>
        <Enter
          enabled
          id="buttonControl"
          onClick={() => {
            onSubmit();
          }}
        >
          Enter
        </Enter>
      </Buttons>

      {result != null && Object.keys(result).length !== 0 && (
        <CardContainer>
          <Titles>
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
              <a href={gitHubLink} target="__blank">
                <img
                  style={{ transform: "translateY(0.1rem)" }}
                  src={github}
                  alt="logo"
                  width="40rem"
                  class="space"
                />
              </a>
              <h3 style={{ fontSize: "1.5rem", paddingLeft: "1rem" }}>
                {title}
              </h3>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-end",
                paddingLeft: "1rem",
                height: "17%",
              }}
            >
              <h3 style={{ fontSize: "1.5rem", paddingLeft: "1rem" }}>
                {titleTwo}
              </h3>

              <a href={gitHubLinkTwo} target="__blank">
                <img
                  style={{ transform: "translateY(0.1rem)", paddingRight: "1rem", paddingLeft: "1rem" }}
                  src={github}
                  alt="logo"
                  width="40rem"
                  class="space"
                />
              </a>
            </div>
          </Titles>

          <CardInfo>
            <Info>
              {Object.keys(mapped).map(function (key, index) {
                return (
                  <Separate>
                    <div>{key}</div>{" "}
                    <div style={{ color: "grey" }}>{mapped[key]}</div>
                  </Separate>
                );
              })}
            </Info>
            <Info>
              {Object.keys(mappedTwo).map(function (key, index) {
                return (
                  <Separate>
                    <div style={{ color: "grey" }}>{mappedTwo[key]}</div>
                    <div>{key}</div>{" "}           
                  </Separate>
                );
              })}
            </Info>
          </CardInfo>
        </CardContainer>
      )}
    </Container>
  );
}
