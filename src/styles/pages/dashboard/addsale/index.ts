import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Theme from '@Types/pages/dashboard/settings/types';

type AddSaleInpt = {
  width?: string;
  display?: string;
  theme?: Theme['theme'];
};

export const AddSaleInput = styled.input<AddSaleInpt>`
  width: ${({ width }) => width || '490px'};
  display: ${({ display }) => display || 'block'};
  height: 20px;
  background: ${({ theme }) => theme && theme.backgroundColor.primary};
  border: 1px solid ${({ theme }) => theme && theme.borderColor};
  color: ${({ theme }) => theme && theme.color};
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  outline: none;
  padding: 10px;
`;

export const AddSaleForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 50px 0;
`;
export const AddSaleTextArea = styled.textarea<Theme>`
  width: ${({ width }: { width?: string }) => width || '450px'};
  height: 131px;
  background: ${({ theme }) => theme && theme.backgroundColor.primary};
  border: 1px solid ${({ theme }) => theme && theme.borderColor};
  color: ${({ theme }) => theme && theme.color};
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  outline: none;
  resize: none;
  font-family: 'SegoeUI', sans-serif;
  padding: 10px;
`;
type ImagePreview = {
  url?: string;
  BoxImages?: boolean;
  offersLabel?: boolean;
  theme?: Theme['theme'];
};

export const AddSaleLabel = styled.label<ImagePreview>`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
  color: ${({ theme }) => theme && theme.color};
  ${({ BoxImages, url, theme }) =>
    BoxImages &&
    css`
      border: 1px solid ${theme && theme.borderColor};
      background: ${url ? `url("${url}")` : ''};
      background-size: cover;
      background-position: center;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 232px;
      height: 235px;
      box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
      border-radius: 10px;
    `}
`;

export const AddSaleImagePreview = styled.div<ImagePreview>`
  width: 116px;
  height: 107px;
  background: ${({ url }) => `url("${url}")`};
  background-size: cover;
  background-position: center;

  margin: 10px;
  object-fit: cover;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  border-radius: 10px;
`;

export const AddSaleImages = styled.div`
  width: 272px;
  height: 253px;
  display: flex;
  flex-wrap: wrap;
  border-radius: 10px;
  margin: 30px 12px;
`;
export const AddSalesImagesContainer = styled.div`
  display: flex;
`;

type AddSaleButton = {
  width?: string;
  height?: string;
  zIndex?: number;
  theme?: Theme['theme'];
};
export const AddSaleCancelButton = styled.button<AddSaleButton>`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: white; */
  background: ${({ theme }) => theme && theme.backgroundColor.primary};
  border: 1px solid ${({ theme }) => theme && theme.borderColor};
  border-radius: 50px;
  border: none;
  width: ${({ width }) => width || '32px'};
  height: ${({ height }) => height || '32px'};
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
  z-index: ${({ zIndex }) => zIndex || '1'};
  div {
    margin: 0;
  }
`;

type AddSaleOffer = {
  width?: string;
  height?: string;
  theme?: Theme['theme'];
};
export const AddSaleOfferContainer = styled.div<AddSaleOffer>`
  box-shadow: 0px 0px 2px ${({ theme }) => theme && theme.borderColor};
  border: 1px solid ${({ theme }) => theme && theme.borderColor};
  color: ${({ theme }) => theme && theme.color};
  width: ${({ width }) => width || '450px'};
  height: ${({ height }) => height || '131px'};
  /* box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25); */
  /* background: white; */
  display: grid;
  grid-template-columns: repeat(2, 250px);
  padding: 10px;
  border-radius: 10px;
`;
export const AddSaleOfferLabel = styled.label<Theme>`
  display: flex;
  margin: 10px 0;
  color: ${({ theme }) => theme && theme.color};
`;
export const AddSaleSubmitButton = styled.button`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 9px 35px;
  width: 91px;
  height: 40px;
  background: #1e90ff;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  border: none;
  outline: none;
  margin: 10px 0;
  color: white;
  font-family: 'SegoeUI', sans-serif;
  font-size: 14px;
  font-weight: bold;
  transition: all 0.3s ease-in-out;
  ${({ styles }: { styles?: string }) => styles}
`;

export const AddSaleContainer = styled.div<Theme>`
  margin: 10px 0;
  color: ${({ theme }) => theme && theme.color};
`;
