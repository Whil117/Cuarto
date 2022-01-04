import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const SettingsAside = styled.aside`
  width: 230px;
  height: 230px;
  background: #f5f5f5;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  object-fit: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(${({ image }: { image?: string }) => image || ''});
`;

export const SettingsForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 0 0 25px;
  justify-content: space-between;
`;
export const SettingsInput = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px 10px;
  width: 226px;
  height: 27px;
  background: #ffffff;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  border: none;
  outline: none;
  ${({ display }: { display?: string }) =>
    display &&
    css`
      display: none;
    `}
`;

export const SettingsInputLabel = styled.label`
  width: 40px;
  height: 40px;
  border-radius: 5px;
  background: #ffffff;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: fixed;
  margin: 170px 0 0 170px;
`;

export const EditProfileStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const SettingsImageProfile = styled.div``;
