import { useEffect, useState } from "react";
import styled from "styled-components";

const Root = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

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

const ProgressArrow = styled.div`
  padding: 0 7px;
  color: #dddfe7;
`;

export const Progressbar = ({ progressCount }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(progressCount);
  }, [count]);

  return (
    <Root>
      <ProgressContainer>
        <ProgressText count={count}>{count} of 2</ProgressText>
        <Progress width={(count / 2) * 100 + "%"}></Progress>
      </ProgressContainer>
    </Root>
  );
};

export default Progressbar;
