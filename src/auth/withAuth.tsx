import verifyToken from '@Services/verifyToken';
import { PageProps } from '@Types/auth/types';
import Cookies from 'js-cookie';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useLayoutEffect, useState } from 'react';

const withAuth = (WrappedComponent: NextPage) => {
  return (props: PageProps | any) => {
    const Router = useRouter();
    const [verified, setVerified] = useState<boolean>(false);

    useLayoutEffect(() => {
      const accessToken = Cookies.get('accessToken');
      if (!accessToken) {
        Router.replace('/');
      } else {
        const data: Promise<boolean> | boolean | any = verifyToken(accessToken);
        if (data) {
          setVerified(data);
        } else {
          Cookies.remove('accessToken');
          Router.replace('/');
        }
      }
    }, []);

    if (verified) {
      return <WrappedComponent {...props} />;
    } else {
      return null;
    }
  };
};

export default withAuth;
