import type { AppProps } from 'next/app';
import Layout from '@Components/layout/layout';
import { Global } from '@emotion/react';
import { Normalize } from '@Styles/global/normalize';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Global styles={Normalize} />

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default MyApp;
