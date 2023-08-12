import styled from "styled-components";
import Header from "../components/Header";
import { useState } from "react";
import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router";
import axios from "axios";

const Root = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px 5px;
`;

//물품명, 견적요청마감일, 견적평균가, 견적서 정렬
const DisplayTextBox = styled.div`
  margin-right: 30px;  
  margin-left: 30px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  width: 400px;
  height: 34px;
  flex-shrink: 0;
  color: #000;
  font-family: Inria Sans;
  font-size: 18px;
  font-style: bold;
  font-weight: 400;
  line-height: normal;
  text-align: left;
`

const DisplayText2 = styled.div`
  width: 100%;
  height: 34px;
  flex-shrink: 0;
  color: #000;
  font-family: Inria Sans;
  font-size: 18px;
  font-style: bold;
  font-weight: 400;
  line-height: normal;
  text-align: left;
`
//견적서
const DisplayTextMain = styled.div`
  margin-top: 12px;
  height: 60px;
  width: 120px;
  color: #000;
  font-family: Inria Sans;
  font-size: 28px;
  font-style: bold;
  font-weight: 700;
  line-height: normal;
`
//물품 변경하기
const DisplayChangeButton = styled.div`
  width: 292px;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  bottom: 8%;
  border-radius: 10px;
  background: #dddfe7;
  font-size: 18px;
  font-weight: 700;
`;

const DisplayLine = styled.div`
  margin-top:6px;
  margin-bottom:6px;
  width: 100%;
  height: 1px;
  background: #000;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`

const DisplayListBox = styled.div`
  padding: 0px;
  margin: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const DisplayListImg = styled.div`
  padding: auto;
  margin: auto;
  width: 50px;
  height: 50px;
  flex-shrink: 0;
  background-color: #D9D9D9;
  border-radius: 50%;
`

const DisplayListButton = styled.div`
  margin: auto;
  width: 80%;
  height: 40px;
  border-radius: 10px;
  background: #595D62;
  color: #FFF;
  text-align: center;
  font-family: Ubuntu;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  display : flex;
  justify-content : center;
  align-items : center;
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

      fetchData();
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
          <DisplayTextMain>견적서</DisplayTextMain>
        </DisplayTextBox>
        <DisplayLine></DisplayLine>
        {
          data.map((item, index)=>(
            <div style={{width: '100%'}}>
            <DisplayListBox>
              <DisplayListImg></DisplayListImg>
              <DisplayTextBox2>
                <DisplayText2>{item.name}</DisplayText2>
                <DisplayText2>{item.price}</DisplayText2>
              </DisplayTextBox2>
              <DisplayListButton onClick={handleClick}>세부 정보</DisplayListButton>
            </DisplayListBox>
            <DisplayLine></DisplayLine>
            </div>
          ))
        }
        <DisplayChangeButton>물품 변경하기</DisplayChangeButton>
      </Root>
    );
  };
  export default Display;