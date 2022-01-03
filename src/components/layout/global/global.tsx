import Navbar from '@Components/Navbar';
import Notification from '@Components/Notification';
import { useRouter } from 'next/router';
import { FC } from 'react';

const GlobalComponents: FC = ({ children }) => {
  const { pathname } = useRouter();
  const invalidPages = ['/', '/login', '/register'];

  return (
    <>
      <Notification />
      {!invalidPages.includes(pathname) && <Navbar />}
      {children}
    </>
  );
};

export default GlobalComponents;
