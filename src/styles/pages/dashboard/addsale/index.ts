import { css } from '@emotion/react';
import styled from '@emotion/styled';

type AddSaleInpt = {
  width?: string;
  display?: string;
};

export const AddSaleInput = styled.input<AddSaleInpt>`
  width: ${({ width }) => width || '490px'};
  display: ${({ display }) => display || 'block'};
  height: 20px;
  background: #ffffff;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  border: none;
  outline: none;
  padding: 10px;
`;

export const AddSaleForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 50px 0;
`;
export const AddSaleTextArea = styled.textarea`
  width: ${({ width }: { width?: string }) => width || '450px'};
  height: 131px;
  background: #ffffff;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  border: none;
  outline: none;
  resize: none;
  font-family: 'SegoeUI', sans-serif;
  padding: 10px;
`;
type ImagePreview = {
  url?: string;
  BoxImages?: boolean;
  offersLabel?: boolean;
};

export const AddSaleLabel = styled.label<ImagePreview>`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
  ${({ BoxImages, url }) =>
    BoxImages &&
    css`
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
};
export const AddSaleCancelButton = styled.button<AddSaleButton>`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
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
};
export const AddSaleOfferContainer = styled.div<AddSaleOffer>`
  width: ${({ width }) => width || '450px'};
  height: ${({ height }) => height || '131px'};
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
  background: white;
  display: grid;
  grid-template-columns: repeat(2, 250px);
  padding: 10px;
`;
export const AddSaleOfferLabel = styled.label`
  display: flex;
  margin: 10px 0;
  /* width: 71px; */
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
  margin: 20px 0;
  color: white;
  font-family: 'SegoeUI', sans-serif;
  font-size: 14px;
  font-weight: bold;
`;

export const AddSaleContainer = styled.div`
  margin: 10px 0;
`;
