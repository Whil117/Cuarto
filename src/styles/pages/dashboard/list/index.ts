import styled from '@emotion/styled';
import { colors } from '@Styles/global/colors';

export const ListContainer = styled.div`
  list-style: none;
  width: 800px;
`;

export const ListAnchor = styled.a`
  color: ${colors.black};
  text-decoration: none;
`;
export const Listbody = styled.div`
  width: 1065px;
  height: 103px;
  background: #ffffff;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  align-items: center;
  margin: 20px 10px;
  padding: 20px;
  &:hover {
    background: #f5f5f5;
  }
`;

export const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;
export const ListOptions = styled.div`
  position: relative;
  right: 120px;
`;
