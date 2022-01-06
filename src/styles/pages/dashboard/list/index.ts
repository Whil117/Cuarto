import styled from '@emotion/styled';
import Theme from '@Types/pages/dashboard/settings/types';
export const ListContainer = styled.div`
  list-style: none;
  width: 800px;
`;

export const ListAnchor = styled.a<Theme>`
  color: ${({ theme }) => theme && theme.color};
  text-decoration: none;
`;
export const Listbody = styled.div<Theme>`
  width: 1065px;
  height: 103px;
  background: ${({ theme }) => theme && theme.backgroundColor.secondary};
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  align-items: center;
  margin: 20px 10px;
  padding: 20px;
  &:hover {
    background: ${({ theme }) => theme && theme.backgroundColor.primary};
    border: 1px solid ${({ theme }) => theme && theme.borderColor};
    outline: -2px solid ${({ theme }) => theme && theme.borderColor};
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
