import styled from "styled-components";
import Header from "../components/Header";
import { useState } from "react";
import axios from "axios";

const Data={comp:"B업체",name:"마샬 스피커",deadline:"2023-07-27",price1:"230000원",price2:"220000원", time:"3일"};

const Root = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px 5px;
`

const DisplayDetailTextMain = styled.div`
    margin: 20px;
    width: 100%;
    color: #000;
    text-align: center;
    font-family: Inria Sans;
    font-size: 28px;
    font-style: bold;
    font-weight: 700;
    line-height: normal;
`
const DisplayDetailTextMain2 = styled.div`
    margin: 50px;
    width: 100%;
    color: #000;
    text-align: center;
    font-family: Inria Sans;
    font-size: 28px;
    font-style: bold;
    font-weight: 700;
    line-height: normal;
`

const DisplayDetailListBox = styled.div`
  margin: 30px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const DisplayDetailButtonBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

const DisplayDetailListImg = styled.div`
  padding: auto;
  margin: auto;
  width: 57px;
  height: 57px;
  flex-shrink: 0;
  background-color: #D9D9D9;
  border-radius: 50%;
`

const DisplayDetailListButton = styled.div`
  padiing: auto;
  margin: auto;
  width: 250px;
  height: 50px;
  border-radius: 10px;
  border: 1px solid #000;
  background: #FFF;
  color: black;
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

const DisplayDetailListButton2 = styled.div`
  padiing: auto;
  margin: 10px;
  width: 220px;
  height: 50px;
  border-radius: 10px;
  border: 1px solid #000;
  background: #FFF;
  color: black;
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

const DisplayDetailTextBox = styled.div`
  margin-right: 30px;  
  margin-left: 30px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`
const DisplayDetailText = styled.div`
  margin: 4px;
  width: 100%
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

export const DisplayDetail = () => {
    const [count, setCount] = useState(0);
  
    return (
      <Root>
        <Header></Header>
        <DisplayDetailTextMain>{Data.comp} 견적 세부정보</DisplayDetailTextMain>
        <DisplayDetailListBox>
          <DisplayDetailListImg></DisplayDetailListImg>
          <DisplayDetailTextBox>
            <DisplayDetailTextMain>{Data.comp}</DisplayDetailTextMain>
          </DisplayDetailTextBox>
          <DisplayDetailListButton>리뷰</DisplayDetailListButton>
        </DisplayDetailListBox>
        <DisplayDetailTextBox>
          <DisplayDetailText>물품명: {Data.name}</DisplayDetailText>
          <DisplayDetailText>견적 요청 마감일: {Data.deadline}</DisplayDetailText>
          <DisplayDetailText>예상 해상 운임: {Data.price1}</DisplayDetailText>
          <DisplayDetailText>예상 내륙 운임: {Data.price2}</DisplayDetailText>
          <DisplayDetailText>소요 시간: {Data.time}</DisplayDetailText>
        </DisplayDetailTextBox>
        <DisplayDetailTextMain2>해당 견적은 견적 요청 마감일 전까지 유효합니다</DisplayDetailTextMain2>
        <DisplayDetailButtonBox>
          <DisplayDetailListButton2>뒤로</DisplayDetailListButton2>
          <DisplayDetailListButton2>세부상담신청</DisplayDetailListButton2>
        </DisplayDetailButtonBox>
      </Root>
    );
  };
  export default DisplayDetail;