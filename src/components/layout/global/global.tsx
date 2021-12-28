import Navbar from '@Components/Navbar';
// import { MainStyled } from '@Styles/components/layout/global';
import { useRouter } from 'next/router';
import { FC } from 'react';

const GlobalComponents: FC = ({ children }) => {
  const { pathname } = useRouter();
  const invalidPages = ['/', '/login', '/register'];
  return (
    <>
      {!invalidPages.includes(pathname) && <Navbar pathname={pathname} />}
      {children}
    </>
  );
};

export default GlobalComponents;
