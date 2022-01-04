import styled from '@emotion/styled';
import Image from 'next/image';
import { FC } from 'react';

const ImageStyled = styled(Image)`
  object-fit: cover;
`;

interface IProps {
  url?: string;
  styles: {
    width?: number;
    height?: number;
  };
  alt?: string;
}

const AtomImg: FC<IProps> = (props) => {
  return (
    <ImageStyled
      src={props.url || '/icons/settings/form/avatar.svg'}
      width={props.styles.width || 100}
      height={props.styles.height || 100}
      alt={props.alt || 'avatar'}
    />
  );
};

export default AtomImg;
