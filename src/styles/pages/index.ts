import styled from '@emotion/styled';

export const MainContainer = styled.main`
  height: 100vh;
`;
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const ContainerImage = styled.img`
  height: 100vh;
`;
export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 300px;
`;
export const ContainerFormInput = styled.input`
  width: 274px;
  height: 32.08px;
  background: #ffffff;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  border: none;
  outline: none;
  padding: 5px;
  font-family: 'SegoeUI', sans-serif;
`;
export const ContainerFormButton = styled.button`
  height: 35px;
  background: #1e90ff;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  border: none;
  outline: none;
  color: #ffffff;
  font-weight: 700;
  font-family: 'SegoeUI', sans-serif;
`;

export const FormButtonShow = styled.button`
  color: #1e90ff;
  background: none;
  border: none;
  outline: none;
  font-weight: 700;
  cursor: pointer;
`;
