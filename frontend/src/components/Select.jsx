import { useState } from "react";
import styled from "styled-components";

const Root = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
`;

const SelectText = styled.div`
  width: 90%;
  margin-bottom: 50px;
  font-family: Ubuntu;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
`;

const SelectBoxContainer = styled.div`
  display: flex;
  padding: 10px 10px;
`;

const SelectBox1 = styled.button`
  width: 146px;
  height: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: ${(props) => (props.color === 1 ? "#dddfe7" : "#595d62")};
  color: ${(props) => (props.color === 1 ? "#000" : "#fff")};
  border: ${props => (props.isClicked ? '2px solid black' : '0px solid black')};
  text-align: center;
  font-family: Ubuntu;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  
  &:active {
    border: 1px solid black
  }
`;

const SelectBox2 = styled.button`
  width: 146px;
  height: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: ${(props) => (props.color === 1 ? "#dddfe7" : "#595d62")};
  color: ${(props) => (props.color === 1 ? "#000" : "#fff")};
  border: ${props => (props.isClicked ? '2px solid black' : '0px solid black')};
  text-align: center;
  font-family: Ubuntu;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  
  &:active {
    border: 1px solid black
  }
`;

export const Select = ({ question, option1, option2 }) => {
  const [isClicked1, setIsClicked1] = useState(false);
  const [isClicked2, setIsClicked2] = useState(false);

  const handleClickButton1 = () => {
    setIsClicked1((prev)=>!prev);
  };

  const handleClickButton2 = () => {
    setIsClicked2((prev)=>!prev);
  };

  return (
    <Root>
      <SelectText>{question}</SelectText>
      <SelectBoxContainer>
        <SelectBox1
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
        </SelectBox1>
        <SelectBox2
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
        </SelectBox2>
      </SelectBoxContainer>
    </Root>
  );
};
export default Select;
