import styled from '@emotion/styled';
import { colors } from '@Styles/global/colors';

export const NavbarStyled = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 175px;
  padding: 0px 20px;
  background: #ffffff;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
  border-radius: 0px 20px 20px 0px;
  position: fixed;
  top: 0;
  justify-content: space-between;
  height: 100%;
`;

export const NavbarArticles = styled.article`
  margin: 40px 20px;
`;
export const NavbarHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavbarListItem = styled.a`
  display: flex;
  align-items: center;
  margin: 10px 0;
  color: ${({ checked }: { checked: boolean }) =>
    checked ? colors.blue : colors.black};
  font-weight: 500;
  text-decoration: none;
`;
