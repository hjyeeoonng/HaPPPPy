import { useState } from "react";
import styled from "styled-components";


// 색상 변수 정의
const progressbarBackgroundColor = "#595d62"
const buttonBackgroundColor = "#dddfe7";
const buttonHoverColor = "#ccc";


const Root = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
`;

//셀렉트 박스 질문
const SelectText = styled.div`
  width: 90%;
  margin-bottom: 30px;
  font-family: Ubuntu;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
`;

const SelectBoxContainer = styled.div`
  display: flex;
  padding: 10px 10px;
`;

const SelectBox = styled.button`
  width: 146px;
  height: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: ${(props) => (props.isClicked ? progressbarBackgroundColor : buttonBackgroundColor)};
  color: ${(props) => (props.isClicked ? "#fff" : "#000")};
  border: ${(props) => (props.isClicked ? "2px solid black" : "none")};
  text-align: center;
  font-family: Ubuntu;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.3s, color 0.3s, border 0.3s;

  &:hover {
    background: ${(props) => (props.isClicked ? buttonBackgroundColor : buttonHoverColor)};
  }
  &:active {
    border: 1px solid black;
  }

`;

export const Select = ({ question, option1, option2 }) => {
  const [isClicked1, setIsClicked1] = useState(false);
  const [isClicked2, setIsClicked2] = useState(false);

  const handleClickButton1 = () => {
    setIsClicked2(false);
    setIsClicked1(true)
  };
  const handleClickButton2 = () => {
    setIsClicked2(true);
    setIsClicked1(false)
  };

  return (
    <Root>
      <SelectText>{question}</SelectText>
      <SelectBoxContainer>
        <SelectBox
          color={1}
          onClick={(e) => {
            handleClickButton1();
            e.target.innerText === "수출"
              ? localStorage.setItem(
                  "shipmentType",
                  JSON.stringify(e.target.innerText)
                )
              : localStorage.setItem(
                  "transportType",
                  JSON.stringify(e.target.innerText)
                );
          }}
          isClicked={isClicked1}
        >
          {option1}
        </SelectBox>
        <SelectBox
          color={2}
          onClick={(e) => {
            handleClickButton2();
            e.target.innerText === "수입"
              ? localStorage.setItem(
                  "shipmentType",
                  JSON.stringify(e.target.innerText)
                )
              : localStorage.setItem(
                  "transportType",
                  JSON.stringify(e.target.innerText)
                );
          }}
          isClicked={isClicked2}
        >
          {option2}
        </SelectBox>
      </SelectBoxContainer>
    </Root>
  );
};
export default Select;
