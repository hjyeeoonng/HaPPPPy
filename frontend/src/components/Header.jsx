import styled from "styled-components";

const Root = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledHeader = styled.div`
  padding: 3% 5%;
  font-size: 36px;
  font-weight: bold;
  font-style: italic;
  text-shadow: 2px 2px 2px gray;
`;

const HeaderContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: flex-end;
`;

const HeaderSignIn = styled.div`
  margin: 10px 10px;
`;

const HeaderLogin = styled.div`
  margin: 10px 10px;
`;

export const Header = () => {
  return (
    <Root>
      <StyledHeader>platform</StyledHeader>
      <HeaderContainer>
        <HeaderSignIn>회원가입</HeaderSignIn>
        <HeaderLogin>로그인</HeaderLogin>
      </HeaderContainer>
    </Root>
  );
};

export default Header;
