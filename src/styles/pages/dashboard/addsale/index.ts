import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const AddSaleInput = styled.input`
  width: 490px;
  height: 20px;
  background: #ffffff;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  border: none;
  outline: none;
  display: ${({ display }: { display?: string }) => display || 'block'};
  padding: 10px;
`;

export const AddSaleForm = styled.form`
  display: flex;
  flex-direction: column;
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
  url?: string | ArrayBuffer | null;
  BoxImages?: boolean;
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
      /* background: #ffffff; */
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
  /* align-items: center; */
`;
export const AddSaleCancelButton = styled.button`
  background: none;
  border: none;
  width: 38px;
  height: 32px;
`;
