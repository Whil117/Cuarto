import styled from '@emotion/styled';

export const SelectStyled = styled.select`
  font-size: 16px;
  border: 1px solid #e6e6e6;
  outline: none;
  cursor: pointer;
  font-family: 'SegoeUI', sans-serif;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 5px;
  background: #ffffff;
  border-radius: 5px;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 18px 0px;
  transition: all 0.3s ease-in-out;
  &:hover {
    transition: all 0.3s ease-in-out;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
  }
`;
