import { useState } from "react";
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

export const Progressbar = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    if (count === 2) {
      setCount(0);
    } else {
      setCount((prev) => prev + 1);
    }
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
      <ProgressArrow
        onClick={() => {
          decreaseCount();
        }}
      >
        &#9664;
      </ProgressArrow>

      <ProgressContainer>
        <ProgressText count={count}>{count} of 2</ProgressText>
        <Progress width={(count / 2) * 100 + "%"}></Progress>
      </ProgressContainer>

      <ProgressArrow
        onClick={() => {
          increaseCount();
        }}
      >
        &#9654;
      </ProgressArrow>
    </Root>
  );
};

export default Progressbar;
