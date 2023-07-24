import React, { useEffect } from "react";
import styled from "styled-components";
import Input from "./pages/Input";
import axios from "axios";

const Root = styled.div`
  padding: 5px 5px;
`;

function App() {
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
