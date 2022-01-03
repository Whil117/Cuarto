import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

type TColors = {
  default: string;
  primary: string;
  secondary: string;
  danger: string;
  disabled: string;
};

export const NotificationColors: TColors = {
  default: 'dodgerblue',
  primary: '#48C4EC',
  secondary: 'gray',
  danger: 'red',
  disabled: 'gray'
};
type NotificationNav = {
  color: keyof TColors;
};

export const NotificationStyle = styled(motion.div)`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  right: 0;
  margin: 0px 40px 0 0;
  width: 200px;
  background: #ffffff;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  padding: 10px;
`;
export const Nav = styled.nav<NotificationNav>`
  display: flex;
  width: 5px;
  border-radius: 5px;
  background: red;
  /* margin: 0px 5px; */
  ${({ color }) =>
    css`
      background: ${NotificationColors[color]};
    `}
`;

export const NotificationHeader = styled.header`
  display: flex;
`;

export const NotificationContent = styled.div`
  margin: 0px 5px;

  h4 {
    margin: 0;
  }
  p {
    opacity: 0.5;
    margin: 0;
  }
`;
