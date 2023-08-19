import styled from "styled-components";
import Header from "../components/Header";
import Select from "../components/SelectButton";
import CustomSelect from "../components/SelectBox";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import theme from "../value/color";
import { ReactComponent as Checked } from "../img/checked.svg";

const Root = styled.div`
width: 375px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 0 auto;
overflow-x: hidden;
`;

const ProgressContainer = styled.div`
width: 124px;
height: 10px;
display: flex;
margin-top: 30px;
position: relative;
background-color: rgba(108, 137, 255, 0.4);
border-radius: 5px;
`;

const Progress = styled.div`
width: ${(props) => props.width};
height: 100%;
background-color: ${theme.main};
transition: width 1s;
border-radius: 5px;
`;

const SelectContainer = styled.div`
width: 100%;
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
font-size: 20px;
font-weight: 400;
line-height: 20px;
letter-spacing: -0.5px;
`;

const GoodsInfoContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 41px;
padding: 5px 5px;
`;

const GoodsInfoHeader = styled.div`
width: 100%;
margin-left: 20px;
margin-bottom: 21px;
font-size: 24px;
font-weight: 400;
`;

const GoodsInfo = styled.div`
width: 100%;
margin: 9px 0px 5px 20px;
font-size: 20px;
`;

const GoodsInputData = styled.input`
width: 328px;
height: 54px;
border-radius: 10px;
border: 1px solid ${theme.medium_gray};
`;

const NextButton = styled.button`
width: 328px;
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
cursor: pointer;
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

const SuccessRoot = styled.div`
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
`;

const SuccessContainer = styled.div`
height: 80vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-size: 24px;
font-weight: 400;
`;

const SuccessText = styled.div`
margin-top: 40px;`

const SuccessButton = styled.button`
width: 327px;
height: 54px;
display: flex;
align-items: center;
justify-content: center;
position: relative;
bottom: 8%;
border-radius: 10px;
border:none;
background:${theme.main};
color: white;
font-size: 18px;
font-weight: 400;
cursor: pointer;
&:hover {
background:${theme.sub};
}

&:active {
background: ${theme.main};
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

const nextData = (item) => {
setApiData1({
    shipmentType: JSON.parse(localStorage.getItem("shipmentType")),
    transportType: JSON.parse(localStorage.getItem("transportType")),
    country : item,
});
};

console.log(apiData1, apiData2);

const addDatasInputPage2 = async () => {
try {
    await axios.post("http://localhost:5000/inputPage1", apiData1);
    await axios.post("http://localhost:5000/inputPage2", apiData2);
    setApiData1({
    shipmentType: "",
    country: "",
    transportType: "",
    });
    setApiData2({
    item_name: "",
    hs_code: "",
    total_price: 0,
    total_weight: 0,
    width: 0,
    height: 0,
    depth: 0,
    item_number: 0,
    });
} catch (error) {
    console.error(error);
    alert("정보 추가 실패!");
}
};

//장소 Selected Box
const [selectedOption, setSelectedOption] = useState('option1');
const [selectedOption2, setSelectedOption2] = useState('option2');

const options1 = [
{ value: '장소를 선택해주세요', label: '장소를 선택해주세요' },
{ value: 'New York', label: 'New York' },
{ value: 'Ottawa', label: 'Ottawa' },
{ value: 'Berlin', label: 'Berlin' },
{ value: 'Milano', label: 'Milano' },
{ value: 'Tokyo', label: 'Tokyo' },
];

const options2 = [
{ value: '물품명을 선택해주세요', label: '물품명을 선택해주세요' },
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
        
        <CustomSelect value={selectedOption} 
        onChange={(e)=>{
            setSelectedOption(e.target.value)}}
            options={options1} width={328 + "px"} />
        <MarginBox></MarginBox>
        <Select
        question={"운임 방법을 선택해주세요"}
        option1={"해상"}
        option2={"항공"}
        ></Select>
        <NextButton
        onClick={() => {
            increaseCount();
            nextData(selectedOption);
        }}
        >
        다음
        </NextButton>
    </SelectContainer>
    )}

    {count === 1 && (
    <GoodsInfoContainer>
        <GoodsInfoHeader>물품 정보를 등록해주세요</GoodsInfoHeader>
        <GoodsInfo>물품명</GoodsInfo>
        <CustomSelect value={selectedOption2} 
        onChange={(e) => {
            setSelectedOption2(e.target.value)
            setApiData2({ ...apiData2, item_name: e.target.value });
        }
        } options={options2} width={328 + "px"} />

        <GoodsInfo>HSCode</GoodsInfo>
        <GoodsInputData
        onChange={(e) =>
            setApiData2({ ...apiData2, hs_code: e.target.value })
        }
        ></GoodsInputData>
        <GoodsInfo>물품 총 가액(원)</GoodsInfo>
        <GoodsInputData
        onChange={(e) =>
            setApiData2({ ...apiData2, total_price: e.target.value })
        }
        ></GoodsInputData>
        <GoodsInfo>총 중량(kg)</GoodsInfo>
        <GoodsInputData
        onChange={(e) =>
            setApiData2({ ...apiData2, total_weight: e.target.value })
        }
        ></GoodsInputData>
        <GoodsInfo>물품 가로 길이(m)</GoodsInfo>
        <GoodsInputData
        onChange={(e) =>
            setApiData2({ ...apiData2, width: e.target.value })
        }
        ></GoodsInputData>
        <GoodsInfo>물품 세로 길이(m)</GoodsInfo>
        <GoodsInputData
        onChange={(e) =>
            setApiData2({ ...apiData2, height: e.target.value })
        }
        ></GoodsInputData>
        <GoodsInfo>물품 높이(m)</GoodsInfo>
        <GoodsInputData
        onChange={(e) =>
            setApiData2({ ...apiData2, depth: e.target.value })
        }
        ></GoodsInputData>
        <GoodsInfo>물품 개수(개)</GoodsInfo>
        <GoodsInputData
        onChange={(e) =>{
                console.log(e.target.value)
                setApiData2({ ...apiData2, item_number: e.target.value })
            }
        }
        ></GoodsInputData>
        <NextButton
        onClick={() => {
            increaseCount();
            addDatasInputPage2();
        }}
        >
        다음
        </NextButton>
    </GoodsInfoContainer>

    )}

    {count === 2 && (
    <SuccessRoot>
        <SuccessContainer><Checked></Checked><SuccessText>물품 정보 등록 완료!</SuccessText></SuccessContainer>
        <SuccessButton onClick={handleDisplayClick}>업체별 견적 보러가기</SuccessButton>
    </SuccessRoot>
    )}
</Root>
);
};
export default Input;