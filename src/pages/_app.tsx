import type { AppProps } from 'next/app';
import Layout from '@Components/layout/layout';
import { Global } from '@emotion/react';
import { Normalize } from '@Styles/global/normalize';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import HeadApp from '@Components/HeadApp/HeadApp';
import { useEffect, useState } from 'react';
import Characters from '@Helpers/Characters';

const MyApp = ({ Component, pageProps, router }: AppProps) => {
  const [count, setcount] = useState(0);

  useEffect(() => {
    for (
      let index = 1;
      index < router.asPath.split(' ').join('').length;
      index++
    ) {
      if (
        router.asPath.split(' ').join('')[index] === '#' ||
        router.asPath.split(' ').join('')[index] === '?'
      ) {
        return;
      } else {
        setcount(index);
      }
    }
    return () => {
      setcount(0);
    };
  }, [router.asPath]);

  const initialState = {
    fetching: false,
    fetched: false,
    items: [],
    error: null
  };

  const reducer = (state = initialState, action: any) => {
    switch (action.type) {
      case 'REQUEST_PENDING': {
        return { ...state, fetching: true };
      }
      case 'REQUEST_FULFILLED': {
        return {
          ...state,
          fetching: false,
          fetched: true,
          items: action.payload
        };
      }
      case 'REQUEST_REJECTED': {
        return { ...state, fetching: false, error: action.payload };
      }
      case 'ADD_ITEM': {
        return {
          ...state,
          items: [...state.items, action.payload]
        };
      }
      default:
        return state;
    }
  };

  const store = createStore(reducer);

  return (
    <Provider store={store}>
      <HeadApp
        title={`Cuarto ${
          Characters(router.asPath.slice(11, count + 1))
            ? `| ${Characters(router.asPath.slice(11, count + 1))} `
            : '| Dashboard'
        } `}
      />
      <Global styles={Normalize} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
};

export default MyApp;
