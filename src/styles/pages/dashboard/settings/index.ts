import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Theme from '@Types/pages/dashboard/settings/types';

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
`;
export const SettingsFormLabel = styled.label<Theme>`
  margin: 10px 0;
  color: ${({ theme }) => theme && theme.color};
`;
export const SettingsInput = styled.input<Theme>`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px 10px;
  width: 226px;
  height: 27px;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
  background: ${({ theme }) => theme && theme.backgroundColor.primary};
  border: 1px solid ${({ theme }) => theme && theme.borderColor};
  border-radius: 5px;
  color: ${({ theme }) => theme && theme.color};
  outline: none;

  ${({ display }) =>
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

export const Types = {
  h1: 'h1',
  h2: 'h2'
};

export const SettingsH1 = styled('h1')<Theme>`
  color: ${({ theme }) => theme && theme.color};
`;
export const SettingsH2 = styled('h2')<Theme>`
  color: ${({ theme }) => theme && theme.color};
`;
export const SettingsH3 = styled('h3')<Theme>`
  color: ${({ theme }) => theme && theme.color};
`;
export const SettingsH4 = styled('h4')<Theme>`
  color: ${({ theme }) => theme && theme.color};
`;
export const SettingsP = styled('p')<Theme>`
  opacity: 0.5;
  color: ${({ theme }) => theme && theme.colors.primary};
`;
