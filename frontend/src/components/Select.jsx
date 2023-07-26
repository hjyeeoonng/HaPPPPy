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

const SelectBox = styled.div`
  width: 146px;
  height: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: ${(props) => (props.color === 1 ? "#dddfe7" : "#595d62")};
  color: ${(props) => (props.color === 1 ? "#000" : "#fff")};
  text-align: center;
  font-family: Ubuntu;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
`;

export const Select = ({ question, option1, option2 }) => {
  return (
    <Root>
      <SelectText>{question}</SelectText>
      <SelectBoxContainer>
        <SelectBox
          color={1}
          onClick={(e) => {
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
        >
          {option1}
        </SelectBox>
        <SelectBox
          color={2}
          onClick={(e) => {
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
        >
          {option2}
        </SelectBox>
      </SelectBoxContainer>
    </Root>
  );
};
export default Select;
