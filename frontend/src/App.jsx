import React, { useEffect } from "react";
import styled from "styled-components";
import Input from "./pages/Input";
import axios from "axios";

import { createGlobalStyle } from 'styled-components';

// 전역 스타일 생성
const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Noto Sans', sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
  }

`;

const Root = styled.div`
  padding: 5px 5px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

function App() {
  <GlobalStyle/>
  const fetchDatas = async () => {
    try {
      const response = await axios.get("http://localhost:5000/displayData");
      console.log(response);
    } catch (error) {
      console.error(error);
      alert("정보 가져오기 실패");
    }
  };

  useEffect(() => {
    fetchDatas();
  }, []);

  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  useEffect(() => {
    setScreenSize();
  });

  return (
    <Root>
      <Input></Input>
    </Root>
  );
}

export default App;
