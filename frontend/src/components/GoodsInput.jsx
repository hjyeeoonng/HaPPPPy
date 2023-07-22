import styled from "styled-components";

const Root = styled.div`
  width: 100%;
`;
const GoodsInfo = styled.div`
  margin: 9px 0px 5px 0px;
  font-family: Ubuntu;
  font-size: 15px;
`;

const GoodsInputData = styled.input`
  width: 310px;
  height: 37px;
  border-radius: 10px;
  border: 1px solid #000;
  background: #f6f6f6;
`;

export const GoodsInput = ({ title }) => {
  return (
    <Root>
      <GoodsInfo>{title}</GoodsInfo>
      <GoodsInputData></GoodsInputData>
    </Root>
  );
};
export default GoodsInput;
