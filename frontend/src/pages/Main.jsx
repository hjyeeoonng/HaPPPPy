import styled from "styled-components";
import Header from "../components/Header";
import Progressbar from "../components/Progressbar";
import Select from "../components/Select";

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
  margin-top: 41px;
`;

const NextButton = styled.div`
  width: 292px;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 10%;
  border-radius: 10px;
  background: #dddfe7;
  font-size: 18px;
  font-weight: 700;
`;

export const Main = () => {
  return (
    <Root>
      <Header></Header>
      <Progressbar></Progressbar>
      <SelectContainer>
        <Select
          question={"진행하려는 무역의 종류가 어떤 방식인가요?"}
          option1={"수출"}
          option2={"수입"}
        ></Select>
        <Select
          question={"세부 종류를 선택해주세요"}
          option1={"수출"}
          option2={"수입"}
        ></Select>
      </SelectContainer>
      <NextButton>다음 단계</NextButton>
    </Root>
  );
};
export default Main;
