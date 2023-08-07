import { useState } from "react";
import styled from "styled-components";
import theme from "../value/color";


const Root = styled.div`
  width: 375px;
  margin-bottom: 40px;
  font-family: AppleSDGothicNeoM00;
  font-size: 18px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.5px;
`;


const SelectBoxContainer = styled.div`
  display: flex;

`;


//셀렉트 박스 질문
const SelectText = styled.div`
  margin-bottom: 30px;
  padding: 0 20px;
`;

const SelectBox = styled.button`
  width: 156px;
  height: 54px;
  border-radius: 10px;
  margin-left: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(0deg, #F6F7F9, #F6F7F9),
  linear-gradient(0deg,  ${theme.back}, ${theme.back});
  color: ${(props) => (props.isClicked ? "#fff" : "#000")};
  border: ${(props) => (props.isClicked ? "2px solid ${theme.main}" : "none")};
  text-align: center;
  border: 1px solid rgba(240, 240, 240, 1);
  cursor: pointer;
  transition: background 0.3s, color 0.3s, border 0.3s;

  &:active {
    border: 1px solid ${theme.main};
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
