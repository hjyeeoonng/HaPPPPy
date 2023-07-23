import styled from "styled-components";
import Header from "../components/Header";
import Select from "../components/Select";
import GoodsInput from "../components/GoodsInput";
import { useState } from "react";

const Root = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px 5px;
`;

const JustSpan = styled.span``;

const ProgressContainer = styled.div`
  width: 70%;
  height: 30px;
  display: flex;
  margin-top: 10px;
  position: relative;
  background-color: #ffffff;
  border: 0.5px solid black;
`;

const Progress = styled.div`
  width: ${(props) => props.width};
  height: 100%;
  background-color: #595d62;
  transition: width 1s;
`;

const ProgressText = styled.div`
  position: absolute;
  top: 0;
  width: 70%;
  padding: 1px 8px 5px 5px;
  color: ${(props) => (props.count === 0 ? "#595d62" : "#ffffff")};
  font-weight: bold;
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

const SuccessRoot = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SuccessContainer = styled.div`
  height: 75%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Ubuntu;
  font-size: 20px;
  font-weight: 700;
`;

const SuccessButton = styled.div`
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

export const Input = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    if (count === 2) {
      setCount(0);
    } else {
      setCount((prev) => prev + 1);
    }
    console.log(count);
  };

  const decreaseCount = () => {
    if (count === 0) {
      setCount(0);
    } else {
      setCount((prev) => prev - 1);
    }
    console.log(count);
  };

  return (
    <Root>
      <Header></Header>
      <ProgressContainer>
        <ProgressText count={count}>{count} of 2</ProgressText>
        <Progress width={(count / 2) * 100 + "%"}></Progress>
      </ProgressContainer>
      {count === 0 && (
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

          <NextButton
            onClick={() => {
              increaseCount();
            }}
          >
            다음 단계
          </NextButton>
        </SelectContainer>
      )}
      {count === 1 && (
        <JustSpan>
          <GoodsInfoContainer>
            <GoodsInfoHeader>물품 정보를 등록해주세요</GoodsInfoHeader>
            <GoodsInput title="물품명"></GoodsInput>
            <GoodsInput title="HSCode"></GoodsInput>
            <GoodsInput title="물품 총 가액"></GoodsInput>
            <GoodsInput title="총중량"></GoodsInput>
            <GoodsInput title="물품 크기(가로,세로,높이"></GoodsInput>
          </GoodsInfoContainer>
          <ButtonContainer>
            <HalfBackButton
              onClick={() => {
                decreaseCount();
              }}
            >
              이전 단계
            </HalfBackButton>
            <HalfNextButton
              onClick={() => {
                increaseCount();
              }}
            >
              다음 단계
            </HalfNextButton>
          </ButtonContainer>
        </JustSpan>
      )}

      {count === 2 && (
        <SuccessRoot>
          <SuccessContainer>물품 정보 등록 완료!</SuccessContainer>
          <SuccessButton>업체별 견적 보러가기</SuccessButton>
        </SuccessRoot>
      )}
    </Root>
  );
};
export default Input;
