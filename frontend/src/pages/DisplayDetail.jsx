import styled from "styled-components";
import Header from "../components/Header";
import { useState } from "react";
import axios from "axios";

const Data={comp:"B업체",name:"마샬 스피커",deadline:"2023-07-27",price1:"230000원",price2:"220000원", time:"3일"};

const Root = styled.div`
width: 375px;
display: flex;
flex-direction: column;
justify-content: center;
align-items:center;
margin: 0 auto;
overflow-x: hidden;
`;

const DisplayDetailTextMain = styled.div`
  color: var(--maintext, #1C1C1C);
  font-family: AppleSDGothicNeoB00;
  font-size: 24px;
  font-style: bold;
  font-weight: 900;
  line-height: 20px; /* 83.333% */
  letter-spacing: -0.5px;
  margin:24px;
`
const DisplayDetailTextMain2 = styled.div`
  color: var(--maintext, #1C1C1C);
  font-family: AppleSDGothicNeoM00;
  font-size: 18px;
  font-style: bold;
  font-weight: 900;
  line-height: 20px; /* 111.111% */
  letter-spacing: -0.5px;
  white-space: pre-line;
`

const DisplayDetailListBox = styled.div`
  margin:16px;
  width: 328px;
  height: 82px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid var(--unnamed, #C4C4C4);
  background: var(--unnamed, #FFF);  
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding:8px;
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
  border-radius: 8px;
  background: var(--sub, #6C89FF);
  color: var(--color-text-dark, #FFF);
  text-align: center;
  font-family: Montserrat;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: 19.5px;
  display : flex;
  justify-content : center;
  align-items : center;
`

const DisplayDetailListButton2 = styled.div`
  border-radius: 10px;
  border: 1px solid var(--main, #3F61EC);
  background: var(--unnamed, #FFF);
  padiing: auto;
  margin: 10px;
  width: 220px;
  height: 50px;
  color: var(--main, #3F61EC);
  text-align: center;
  font-family: AppleSDGothicNeoB00;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 125% */
  letter-spacing: -0.5px;
  display : flex;
  justify-content : center;
  align-items : center;
`

const DisplayDetailListButton3 = styled.div`
  border-radius: 10px;
  background: var(--main, #3F61EC);  
  border: 1px solid var(--main, #3F61EC);
  padiing: auto;
  margin: 10px;
  width: 220px;
  height: 50px;
  color: var(--white, #FFF);
  text-align: center;
  font-family: AppleSDGothicNeoB00;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 125% */
  letter-spacing: -0.5px;
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

const DisplayDetailTextBox2 = styled.div`
  width: 328px;
  height: 154px;
  flex-shrink: 0;
  border-radius: 5px;
  background: var(--background, #F6F7F9);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`

const DisplayDetailText = styled.div`
  color: var(--maintext, #1C1C1C);
  font-family: AppleSDGothicNeoM00;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.1px;
`
const DisplayDetailTextWrap = styled.div`
  width: 328px;
  height: 144px;
  display: flex;
  flex-direction: column;
  align-items:left;
  justify-content: center;
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
        <DisplayDetailTextBox2>
          <DisplayDetailText>물품명: {Data.name}</DisplayDetailText>
          <DisplayDetailText>견적 요청 마감일: {Data.deadline}</DisplayDetailText>
          <DisplayDetailText>예상 해상 운임: {Data.price1}</DisplayDetailText>
          <DisplayDetailText>예상 내륙 운임: {Data.price2}</DisplayDetailText>
          <DisplayDetailText>소요 시간: {Data.time}</DisplayDetailText>
        </DisplayDetailTextBox2>
        <DisplayDetailTextWrap>
          <DisplayDetailTextMain2>해당 견적은</DisplayDetailTextMain2>
          <DisplayDetailTextMain2>견적 요청 마감일 전까지 유효합니다</DisplayDetailTextMain2>
        </DisplayDetailTextWrap>
        <DisplayDetailButtonBox>
          <DisplayDetailListButton2>뒤로</DisplayDetailListButton2>
          <DisplayDetailListButton3>세부상담신청</DisplayDetailListButton3>
        </DisplayDetailButtonBox>
      </Root>
    );
  };
  export default DisplayDetail;