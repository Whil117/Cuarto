import { FC } from 'react';
import GlobalComponents from './global/global';

interface IProps {}

const Layout: FC<IProps> = ({ children }) => {
  return <GlobalComponents>{children}</GlobalComponents>;
};

export default Layout;
