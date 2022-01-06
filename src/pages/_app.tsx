import HeadApp from '@Components/HeadApp/HeadApp';
import Layout from '@Components/layout/layout';
import { Global, ThemeProvider } from '@emotion/react';
import '@Firebase/config';
import ThemeContext from '@Hooks/ThemeContext/ThemeContext';
import useStore from '@Store/store';
import { Normalize } from '@Styles/global/normalize';
import Theme, { themeDark, themeLight, TypeTheme } from '@Styles/global/theme';
import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { store, persistor } = useStore();
  const [theme, setTheme] = useState<TypeTheme>(Theme.light as TypeTheme);
  useEffect(() => {
    const themeLocal = localStorage.getItem('theme');
    setTheme(
      !themeLocal ? themeLight : themeLocal === 'Light' ? themeLight : themeDark
    );
    localStorage.setItem(
      'theme',
      `${!themeLocal ? 'Light' : themeLocal === 'Light' ? 'Light' : 'Dark'}`
    );
  }, []);
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <PersistGate loading={null} persistor={persistor}>
            <HeadApp />
            <Global styles={Normalize} />
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </PersistGate>
        </ThemeContext.Provider>
      </ThemeProvider>
    </Provider>
  );
};

export default MyApp;
