import styled from "styled-components";
import Header from "../components/Header";
import Select from "../components/Select";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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

  const navigate = useNavigate();

  const handleDisplayClick = () => {
    navigate("/display");
  };

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

  const [apiData1, setApiData1] = useState({
    shipmentType: "",
    transportType: "",
  });

  const [apiData2, setApiData2] = useState({
    item_name: "",
    hs_code: "",
    total_price: "",
    total_weight: "",
    width: "",
    height: "",
    depth: "",
  });

  const nextData = () => {
    setApiData1({
      shipmentType: JSON.parse(localStorage.getItem("shipmentType")),
      transportType: JSON.parse(localStorage.getItem("transportType")),
    });
  };

  console.log(apiData1);

  const addDatasInputPage2 = async () => {
    try {
      await axios.post("http://localhost:5000/inputPage1", apiData1);
      await axios.post("http://localhost:5000/inputPage2", apiData2);
      setApiData1({
        shipmentType: "",
        transportType: "",
      });
      setApiData2({
        item_name: "",
        hs_code: "",
        total_price: "",
        total_weight: "",
        width: "",
        height: "",
        depth: "",
      });
    } catch (error) {
      console.error(error);
      alert("정보 추가 실패!");
    }
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
              nextData();
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
            <GoodsInfo>물품명</GoodsInfo>
            <GoodsInputData
              onChange={(e) =>
                setApiData2({ ...apiData2, item_name: e.target.value })
              }
            ></GoodsInputData>
            <GoodsInfo>HSCode</GoodsInfo>
            <GoodsInputData
              onChange={(e) =>
                setApiData2({ ...apiData2, hs_code: e.target.value })
              }
            ></GoodsInputData>
            <GoodsInfo>물품 총 가액</GoodsInfo>
            <GoodsInputData
              onChange={(e) =>
                setApiData2({ ...apiData2, total_price: e.target.value })
              }
            ></GoodsInputData>
            <GoodsInfo>총중량</GoodsInfo>
            <GoodsInputData
              onChange={(e) =>
                setApiData2({ ...apiData2, total_weight: e.target.value })
              }
            ></GoodsInputData>
            <GoodsInfo>물품 가로 길이</GoodsInfo>
            <GoodsInputData
              onChange={(e) =>
                setApiData2({ ...apiData2, width: e.target.value })
              }
            ></GoodsInputData>
            <GoodsInfo>물품 세로 길이</GoodsInfo>
            <GoodsInputData
              onChange={(e) =>
                setApiData2({ ...apiData2, height: e.target.value })
              }
            ></GoodsInputData>
            <GoodsInfo>물품 높이</GoodsInfo>
            <GoodsInputData
              onChange={(e) =>
                setApiData2({ ...apiData2, depth: e.target.value })
              }
            ></GoodsInputData>
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
                addDatasInputPage2();
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
          <SuccessButton onClick={handleDisplayClick}>업체별 견적 보러가기</SuccessButton>
        </SuccessRoot>
      )}
    </Root>
  );
};
export default Input;
