import HeadApp from '@Components/HeadApp/HeadApp';
import Layout from '@Components/layout/layout';
import { Global } from '@emotion/react';
import '@Firebase/config';
import useStore from '@Store/store';
import { Normalize } from '@Styles/global/normalize';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { store, persistor } = useStore();
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <HeadApp />
        <Global styles={Normalize} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PersistGate>
    </Provider>
  );
};

export default MyApp;
