import type { AppProps } from 'next/app';
import Layout from '@Components/layout/layout';
import { Global } from '@emotion/react';
import { Normalize } from '@Styles/global/normalize';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const MyApp = ({ Component, pageProps }: AppProps) => {
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
      <Global styles={Normalize} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
};

export default MyApp;
