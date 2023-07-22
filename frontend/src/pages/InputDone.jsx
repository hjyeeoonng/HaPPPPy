import styled from "styled-components";
import Header from "../components/Header";
import Progressbar from "../components/Progressbar";
const Root = styled.div`
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
export const InputDone = () => {
  return (
    <Root>
      <Header></Header>
      <Progressbar></Progressbar>
      <SuccessContainer>물품 정보 등록 완료!</SuccessContainer>
      <SuccessButton>업체별 견적 보러가기</SuccessButton>
    </Root>
  );
};
export default InputDone;
