import Characters from '@Helpers/Characters';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const HeadApp = () => {
  const { asPath } = useRouter();
  const [title, setTitle] = useState('');
  useEffect(() => {
    for (let index = 1; index < asPath.split(' ').join('').length; index++) {
      if (
        asPath.split(' ').join('')[index] === '#' ||
        asPath.split(' ').join('')[index] === '?'
      ) {
        return;
      } else {
        if (Characters(asPath.slice(11, index))) {
          setTitle(`Cuarto | ${Characters(asPath.slice(11, index + 1))}`);
        } else {
          setTitle(`Cuarto | Dashboard`);
        }
      }
    }
  }, [asPath]);

  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Cuarto | Dashboard" />
      <meta name="keywords" content="Cuarto, Dashboard" />
      <meta name="author" content="Cuarto" />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="google" content="nositelinkssearchbox" />
    </Head>
  );
};

export default HeadApp;
