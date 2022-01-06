import styled from '@emotion/styled';
import dynamic from 'next/dynamic';
import { colors } from '@Styles/global/colors';
import { css } from '@emotion/react';
import { useMemo } from 'react';

interface SvgDynamicProps {
  active: boolean | undefined;
  color?: string;
  width?: string;
  height?: string;
  svgProp?: {
    width: string;
    height: string;
  };
}

const SvgBox = styled.div<SvgDynamicProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    path {
      ${({ active }) =>
        active &&
        css`
          fill: ${colors.blue};
        `}
    }
  }
  width: ${({ width }) => width || '44px'};
  height: ${({ height }) => height || '44px'};
`;

export type IconProps = {
  name: string;
  active?: boolean;
  children?: any;
  width?: string;
  color?: string;
  height?: string;
};
const AtomIcon = ({
  children,
  name: address,
  active,
  width,
  color,
  height
}: IconProps) => {
  const DynamicIcon = useMemo(
    () => dynamic(() => import(`../../../../public/${address}.svg`)),
    [address]
  );

  if (!DynamicIcon) return null;
  return (
    <SvgBox color={color} active={active} width={width} height={height}>
      <DynamicIcon />
      {children}
    </SvgBox>
  );
};

export default AtomIcon;
