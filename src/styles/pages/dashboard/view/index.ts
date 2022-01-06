import styled from '@emotion/styled';
import Theme from '@Types/pages/dashboard/settings/types';
import Image from 'next/image';

export const ViewImagesContainer = styled.article`
  display: grid;
  grid-template-columns: repeat(4, 200px);
  grid-template-rows: repeat(2, 200px);
  width: 791px;
`;
export const ViewImageMain = styled.aside`
  grid-row: 1 / 3;
  grid-column: 1 / 3;
  margin: 10px 0;
`;
export const ViewImageSide = styled.aside`
  margin: 10px;
`;

export const ViewImage = styled(Image)`
  object-fit: cover;
  border-radius: 10px;
`;
export const ViewArticles = styled.div`
  display: flex;
`;
export const ViewArticleOne = styled.article`
  width: 400px;
`;
export const ViewOfferContainer = styled.div<Theme>`
  background: ${({ theme }) => theme && theme.backgroundColor.primary};
  border: 1px solid ${({ theme }) => theme && theme.borderColor};
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  display: grid;
  width: 360px;
  grid-template-columns: repeat(2, 180px);
  padding: 20px;
`;

export const ViewOffer = styled.div`
  display: flex;
`;

export const ViewHeader = styled.header`
  display: flex;
  justify-content: space-between;
`;
export const ViewBox = styled.main`
  width: 791px;
`;

export const ViewFavoriteButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
`;
