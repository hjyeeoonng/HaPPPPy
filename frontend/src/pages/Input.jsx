import styled from "styled-components";
import Header from "../components/Header";
import Progressbar from "../components/Progressbar";
import Select from "../components/Select";
import GoodsInput from "../components/GoodsInput";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Root = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px 5px;
`;

const SelectContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 41px;
  padding: 5px 5px;
`;

const GoodsInfoContainer = styled.div`
  width: 100%;
  margin-top: 41px;
`;

const GoodsInfoHeader = styled.div`
  margin-bottom: 21px;
  font-family: Ubuntu;
  font-size: 20px;
  font-weight: 700;
`;

const NextButton = styled.div`
  width: 292px;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  border-radius: 10px;
  background: #dddfe7;
  font-size: 18px;
  font-weight: 700;
`;
const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const HalfNextButton = styled.div`
  width: 150px;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: #dddfe7;
  font-size: 18px;
  font-weight: 700;
`;
const HalfBackButton = styled.div`
  width: 150px;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: #dddfe7;
  font-size: 18px;
  font-weight: 700;
`;

export const Input = () => {
  const [showFirst, setShowFirst] = useState(true);
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  const increaseCount = () => {
    if (count === 2) {
      setCount(0);
    } else {
      setCount((prev) => prev + 1);
      console.log(count);
    }
    setShowFirst((prev) => !prev);
  };

  const decreaseCount = () => {
    if (count === 0) {
      setCount(0);
    } else {
      setCount((prev) => prev - 1);
    }
  };

  return (
    <Root>
      <Header></Header>
      <Progressbar progressCount={count}></Progressbar>
      {showFirst && (
        <SelectContainer>
          <Select
            question={"진행하려는 무역의 종류가 어떤 방식인가요?"}
            option1={"수출"}
            option2={"수입"}
          ></Select>
          <Select
            question={"세부 종류를 선택해주세요"}
            option1={"해상"}
            option2={"항공"}
          ></Select>

          <NextButton onClick={increaseCount}>다음 단계</NextButton>
        </SelectContainer>
      )}

      {!showFirst && (
        <span>
          <GoodsInfoContainer>
            <GoodsInfoHeader>물품 정보를 등록해주세요</GoodsInfoHeader>
            <GoodsInput title="물품명"></GoodsInput>
            <GoodsInput title="HSCode"></GoodsInput>
            <GoodsInput title="물품 총 가액"></GoodsInput>
            <GoodsInput title="총중량"></GoodsInput>
            <GoodsInput title="물품 크기(가로,세로,높이"></GoodsInput>
          </GoodsInfoContainer>
          <ButtonContainer>
            <HalfBackButton onClick={increaseCount}>이전 단계</HalfBackButton>
            <HalfNextButton
              onClick={() => {
                navigate("/done");
              }}
            >
              다음 단계
            </HalfNextButton>
          </ButtonContainer>
        </span>
      )}
    </Root>
  );
};
export default Input;
