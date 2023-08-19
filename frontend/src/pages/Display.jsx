import styled from "styled-components";
import Header from "../components/Header";
import { useState } from "react";
import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router";
import axios from "axios";
import theme from "../value/color";

const Root = styled.div`
width: 375px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 0 auto;
overflow-x: hidden;
`;

//물품명, 견적요청마감일, 견적평균가, 견적서 정렬
const DisplayTextBox = styled.div`
  width: 328px;
  height: 102px;
  flex-shrink: 0;
  border-radius: 5px;
  background: var(--background, #F6F7F9);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
`

const DisplayTextBox2 = styled.div`
  margin-right: 30px;  
  margin-left: 30px;
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`
//물품명, 견적요청마감일, 견적평균가
const DisplayText = styled.div`
  color: var(--maintext, #1C1C1C);
  font-family: AppleSDGothicNeoM00;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.1px;
`

const DisplayText2 = styled.div`
  color: var(--maintext, #1C1C1C);
  font-family: AppleSDGothicNeoM00;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 125% */
  letter-spacing: -0.5px;
  height: 34px;
  flex-shrink: 0;
  text-align: left;
`
const DisplayText3 = styled.div`
  height: 34px;
  flex-shrink: 0;
  text-align: left;
  color: var(--maintext, #1C1C1C);
  font-family: AppleSDGothicNeoB00;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 111.111% */
  letter-spacing: -0.5px;
`

//견적서
const DisplayTextMain = styled.div`
  margin : 18px; 
  color: var(--maintext, #1C1C1C);
  font-family: AppleSDGothicNeoB00;
  font-size: 24px;
  font-style: normal;
  font-weight: 900;
  line-height: 20px; /* 83.333% */
  letter-spacing: -0.5px;
`
//물품 변경하기
const DisplayChangeButton = styled.div`
  width: 327px;
  height: 54px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  bottom: 8%;
  border-radius: 10px;
  border:none;
  background:${theme.main};
  color: white;
  font-size: 18px;
  font-weight: 400;
  cursor: pointer;
  &:hover {
  background:${theme.sub};
  }

  &:active {
  background: ${theme.main};
  }

  &:not(:active) {
  transition: background 0.3s;
  }
`;

const DisplayLine = styled.div`
  background-color:#C4C4C4;
  height: 0.5px;
  margin:16px;
  width: 292px;
  stroke-width: 0.5px;
  stroke: var(--unnamed, #C4C4C4);
`

const DisplayListBox = styled.div`
  padding: 0px;
  margin: 0px;
  width: 296px;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const DisplayListImg = styled.div`
  margin-left:16px;
  width: 50px;
  height: 50px;
  flex-shrink: 0;
  background-color: #D9D9D9;
  border-radius: 50%;
`

const DisplayListButton = styled.div`
  width:116px;
  height:24px;
  display: inline-flex;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  background: var(--sub, #6C89FF);
  color: var(--color-text-dark, #FFF);
  text-align: center;
  cursor: pointer;
  /* Mobile/Text/Small/Bold */
  font-family: Montserrat;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 19.5px; /* 150% */
`

const DisplayListWrap = styled.div`
  overflow : auto;
  margin-bottom:18px;
  width: 328px;
  height: 344px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid var(--unnamed, #C4C4C4);
  background: var(--unnamed, #FFF);
`

export const Display = () => {
    const passData2 = useLocation();
    console.log(passData2);

    const [data, setData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:5000/company');
          const fetchedData = response.data.map(item => {
            const minPrice = 200;
            const maxPrice = 300;
            const randomPrice = String((Math.floor(Math.random() * (maxPrice - minPrice + 1)) + minPrice)*1000)+"원";
            return { ...item, price: randomPrice };
          });
          setData(fetchedData);
        } catch (error) {
          console.log('Error fetching data:', error);
        }
      };

      const fetchDisplayData = async ()=>{
        const response = await axios.get('http://localhost:5000/displayData')
        console.log(response.data) 
      
      }

      fetchData();
      fetchDisplayData();
    }, []);

    const navigate = useNavigate();

    const handleClick = () => {
      navigate("/displayDetail");
    };
  
    return (
      <Root>
        <Header></Header>
        <DisplayTextBox>
          <DisplayText>물품명 마샬 스피커<br/></DisplayText>
          <DisplayText>견적요청마감일 2023-07-27<br/></DisplayText>
          <DisplayText>견적평균가 200000원<br/></DisplayText>
        </DisplayTextBox>
        <DisplayTextMain>견적서</DisplayTextMain>
        <DisplayListWrap>
        <DisplayLine></DisplayLine>
        {
          data.map((item, index)=>(
            <div style={{width: '100%'}}>
            <DisplayListBox>
              <DisplayListImg></DisplayListImg>
              <DisplayTextBox2>
                <DisplayText3>{item.name}</DisplayText3>
                <DisplayText2>{item.price}</DisplayText2>
              </DisplayTextBox2>
              <DisplayListButton onClick={handleClick}>세부 정보</DisplayListButton>
            </DisplayListBox>
            <DisplayLine></DisplayLine>
            </div>
          ))
        }
        </DisplayListWrap>
        <DisplayChangeButton>물품 변경하기</DisplayChangeButton>
      </Root>
    );
  };
  export default Display;