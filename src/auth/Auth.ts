import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
// import { NextPageContext } from 'next';
// import { FC } from 'react';

// interface IProps {
//   cookie: string;
//   children: any;
// }

const Auth = (children: any) => {
  const [state, setstate] = useState();
  useEffect(() => {
    if (!Cookies.get('token')) {
      useRouter().push('/login');
    } else {
      setstate(children);
    }
  }, [children]);

  return state;
  // return (props) => {
  //   if (typeof window === 'undefined') {
  //     const router = useRouter();
  //     const cookie = Cookies.get('token');

  //     if (!cookie) {
  //       router.replace('/login');
  //     }
  //     return children;
  //   }
  // };
};

// export async function getServerSideProps(context: NextPageContext) {
//   const cookie = Cookies.get('token');
//   return {
//     props: {
//       cookie
//     }
//   };
// }

export default Auth;
