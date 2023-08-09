import styled from "styled-components";
import Header from "../components/Header";
import Select from "../components/SelectButton";
import CustomSelect from "../components/SelectBox";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import theme from "../value/color";

// 색상 변수 정의
const progressbarBackgroundColor = "#595d62"
const inputBackgroundColor = "#f6f6f6"
const buttonBackgroundColor = "#dddfe7";
const buttonHoverColor = "#ccc";
const buttonActiveColor = "#aaa";

const Root = styled.div`
  width: 375px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px 5px;
  margin: 0 auto;
  
`;

const JustSpan = styled.span``;

const ProgressContainer = styled.div`
  width: 50%;
  height: 30px;
  display: flex;
  margin-top: 10px;
  position: relative;
  background-color: #ffffff;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Progress = styled.div`
  width: ${(props) => props.width};
  height: 100%;
  background-color: ${progressbarBackgroundColor};
  transition: width 1s;
`;

const ProgressText = styled.div`
  position: absolute;
  top: 0;
  width: 70%;
  padding: 1px 8px 5px 5px;
  color: ${(props) => (props.count === 0 ? progressbarBackgroundColor : "#ffffff")};
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

//셀렉트 박스의 질문
const SelectText = styled.div`
  width: 90%;
  margin-bottom: 30px;
  font-family: AppleSDGothicNeoM00;
  font-size: 18px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.5px;
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
  border: 1px solid #ccc;
  background: ${inputBackgroundColor};
`;

const NextButton = styled.button`
  width: 327px;
  height: 54px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  border-radius: 10px;
  border:none;
  background:${theme.light_gray};
  color: ${theme.medium_gray};
  font-size: 18px;
  font-weight: 700;
  &:hover {
    background: ${theme.main};
    color: white;
  }

  &:active {
    background: ${theme.main};
    color: white;
  }

  &:not(:active) {
    transition: background 0.3s;
  }
`;
const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const HalfNextButton = styled.button`
  width: 150px;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border:none;
  background: ${buttonBackgroundColor};
  font-size: 18px;
  font-weight: 700;
  &:hover {
    background: ${buttonHoverColor};
  }
  

  &:active {
    background: ${buttonActiveColor};
  }
  
  &:not(:active) {
    transition: background 0.3s;
  }
`;
const HalfBackButton = styled.button`
  width: 150px;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border:none;
  background: ${buttonBackgroundColor};
  font-size: 18px;
  font-weight: 700;
  &:hover {
    background: ${buttonHoverColor};
  }

  &:active {
    background:  ${buttonActiveColor};
  }

  &:not(:active) {
    transition: background 0.3s;
  }
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

const SuccessButton = styled.button`
  width: 292px;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  bottom: 8%;
  border-radius: 10px;
  border:none;
  background:${buttonBackgroundColor};
  font-size: 18px;
  font-weight: 700;
  &:hover {
    background:${buttonHoverColor};
  }

  &:active {
    background:  ${buttonActiveColor};
  }

  &:not(:active) {
    transition: background 0.3s;
  }
`;

const MarginBox = styled.div`
  margin-bottom: 30px;
`
export const Input = () => {
  const [count, setCount] = useState(0);

  const navigate = useNavigate();

  const handleDisplayClick = () => {
    //현정 수정중 데이터 전달
    navigate("/display", passData2);
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
  //현정수정중 데이터 전달
  const [passData2, setpassData2] = useState({
    name: ""
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
      setpassData2({
        name: apiData2.item_name
      })
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

  //장소 Selected Box
  const [selectedOption, setSelectedOption] = useState('option1');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const options1 = [
    { value: '장소를 선택해주세요', label: '장소를 선택해주세요' },
    { value: 'New York', label: 'New York' },
    { value: 'Ottawa', label: 'Ottawa' },
    { value: 'Berlin', label: 'Berlin' },
    { value: 'Milano', label: 'Milano' },
    { value: 'Tokyo', label: 'Tokyo' },
  ];

  const options2 = [
    { value: '냉동/냉장', label: '냉동/냉장' },
    { value: '화장품/미용', label: '화장품/미용' },
    { value: '패션의류', label: '패션의류' },
    { value: '패션잡화', label: '패션잡화' },
    { value: '디지털/가전', label: '디지털/가전' },
    { value: '가구/인테리어', label: '가구/인테리어' },
    { value: '출산/육아', label: '출산/육아' },
    { value: '생활/건강', label: '생활/건강' },
    { value: '도서', label: '도서' },
    { value: '애완용품', label: '애완용품' },
    { value: '상온식품', label: '상온식품' },
    { value: '기타', label: '기타' },
  ];

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
            question={"진행하려는 무역의 종류를 선택해주세요."}
            option1={"수출"}
            option2={"수입"}
          ></Select>
          <SelectText>장소를 선택해주세요</SelectText>
          <CustomSelect value={selectedOption} onChange={handleSelectChange} options={options1} width={328+"px"}/>
          <MarginBox></MarginBox>
          <Select
            question={"운임 방법을 선택해주세요"}
            option1={"해상"}
            option2={"항공"}
          ></Select>



          <NextButton
            onClick={() => {
              increaseCount();
              nextData();
            }}
          >
            다음
          </NextButton>
        </SelectContainer>
      )}
      {count === 1 && (
        <JustSpan>
          <GoodsInfoContainer>
            <GoodsInfoHeader>물품 정보를 등록해주세요</GoodsInfoHeader>
            <GoodsInfo>물품명</GoodsInfo>
            <CustomSelect value={selectedOption} onChange={(e) =>{
                setApiData2({ ...apiData2, item_name: selectedOption });
                handleSelectChange(e);
            }
              } options={options2} width={328+"px"}/>

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
