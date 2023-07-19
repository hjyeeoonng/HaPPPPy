import styled from "styled-components";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledHeader = styled.div`
  padding: 10px 5px;
  font-size: 36px;
  font-weight: bold;
  font-style: italic;
  text-shadow: 2px 2px 2px gray;
`;

const StyledContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

const StyledSignIn = styled.div`
  padding: 10px 5px 10px 15px;
`;

const StyledLogin = styled.div`
  padding: 10px 5px;
`;

export const Header = () => {
  return (
    <Root>
      <StyledHeader>platform</StyledHeader>
      <StyledContainer>
        <StyledSignIn>회원가입</StyledSignIn>
        <StyledLogin>로그인</StyledLogin>
      </StyledContainer>
    </Root>
  );
};

export default Header;
