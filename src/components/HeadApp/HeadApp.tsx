import Head from 'next/head';
import { FC } from 'react';

const HeadApp: FC<{ title: string }> = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
  );
};

export default HeadApp;
