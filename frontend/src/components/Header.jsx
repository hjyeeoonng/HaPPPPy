import styled from "styled-components";
import { ReactComponent as Profile } from "../img/profile.svg";
import logoImage from "../img/logo1.JPG";

const Root = styled.div`
  width: 100%;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.04);
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0 20px 0;
  position: relative;
`;

const StyledHeader = styled.img`
  width: auto;
  height: 72px;
  font-size: 36px;
  font-weight: bold;
  font-style: italic;
  text-shadow: 2px 2px 2px gray;
  text-align:end;
`;

const ProfileIcon = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
`

export const Header = () => {
  return (
    <Root>
      <HeaderContainer>
        <StyledHeader src={logoImage} alt="Logo" />
        <ProfileIcon>
        <Profile></Profile>
        </ProfileIcon>
      </HeaderContainer>
    </Root>
  );
};

export default Header;
