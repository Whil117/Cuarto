import HeadApp from '@Components/HeadApp/HeadApp';
import Layout from '@Components/layout/layout';
import { Global } from '@emotion/react';
import '@Firebase/config';
import { Normalize } from '@Styles/global/normalize';
import type { AppProps } from 'next/app';
import store from '@Store/store';
import { Provider } from 'react-redux';
const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <HeadApp />
      <Global styles={Normalize} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
};

export default MyApp;
