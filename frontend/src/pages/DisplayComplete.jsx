import styled from "styled-components";
import Header from "../components/Header";
import { ReactComponent as Checked } from "../img/checked.svg";
import theme from "../value/color";
import { useNavigate } from "react-router-dom";

const Root = styled.div`
width: 375px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 0 auto;
overflow-x: hidden;
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


export const DisplayComplete = () => {

    const navigate = useNavigate();

    const handleMainClick = () => {
      navigate("/");
    };
  
    return (
      <Root>
        <SuccessRoot>
            <SuccessContainer><Checked></Checked><SuccessText>세부 상담 신청 완료!</SuccessText></SuccessContainer>
            <SuccessButton onClick={handleMainClick}>처음 화면으로</SuccessButton>
        </SuccessRoot>
      </Root>
    );
  };
  export default DisplayComplete;