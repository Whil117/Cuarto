import styled from '@emotion/styled';
import { colors } from '@Styles/global/colors';
import { TypeTheme } from '@Styles/global/theme';

export const NavbarStyled = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 205px;
  padding: 0px 20px;
  background: ${colors.gray_light};
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
  border-radius: 0px 20px 20px 0px;
  position: fixed;
  top: 0;
  justify-content: space-between;
  height: 100%;
  background-color: ${({ theme }: { theme?: TypeTheme }) =>
    theme && theme.backgroundColor.secondary};
  }
`;

export const NavbarArticles = styled.article`
  margin: 40px 20px;
`;
export const NavbarHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    color: ${({ theme }: { theme?: TypeTheme }) => theme && theme.color};
  }
`;

export const NavbarListItem = styled.a`
  display: flex;
  align-items: center;
  margin: 10px 0;
  color: ${({ checked, theme }: { checked: boolean; theme?: TypeTheme }) =>
    checked ? colors.blue : theme?.color};
  font-weight: 500;
  text-decoration: none;
`;

export const NavbarSubtitle = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: ${colors.black};
  opacity: 0.5;
`;
