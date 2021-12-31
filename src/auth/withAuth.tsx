import verifyToken from '@Services/verifyToken';
import Cookies from 'js-cookie';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import React, { useLayoutEffect, useState } from 'react';

const withAuth = (WrappedComponent: NextPage) => {
  return ({ pageProps }: AppProps) => {
    const Router = useRouter();
    const [verified, setVerified] = useState<boolean>(false);

    useLayoutEffect(() => {
      const accessToken = Cookies.get('accessToken');
      if (!accessToken) {
        Router.replace('/');
      } else {
        const data: Promise<boolean> = verifyToken(accessToken);
        if (data) {
          data.then((res: boolean) => setVerified(res));
        } else {
          Cookies.remove('accessToken');
          Router.replace('/');
        }
      }
    }, []);

    if (verified) {
      return <WrappedComponent {...pageProps} />;
    } else {
      return null;
    }
  };
};

export default withAuth;
