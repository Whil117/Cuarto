import baseUrl from '@Assets/cuartobackend';
import { DashboardStyled } from '@Styles/global';
import axios from 'axios';
import Cookies from 'js-cookie';
import { NextPage } from 'next';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import {
  ViewArticleOne,
  ViewArticles,
  ViewImage,
  ViewImageMain,
  ViewImagesContainer,
  ViewImageSide,
  ViewOffer,
  ViewOfferContainer
} from '@Styles/pages/dashboard/view';
import AtomIcon from '@Components/Atoms/Svg';
import LoweReplace from '@Helpers/LoweReplace';

type Data = {
  author: {
    date: string;
    username: string;
    _id: string;
  };
  sale: {
    address: string;
    description: string;
    details: {
      rooms: number;
      bathrooms: number;
      bedrooms: number;
      guests: number;
    };
    images: string[];
    offer: string[];
    price: number;
    title: string;
    _id: string;
  };
};

const View: NextPage = () => {
  const router = useRouter();
  const { t } = useTranslation('common');
  const { pid } = router.query;
  const [data, setData] = useState<Data>({} as Data);

  useEffect(() => {
    pid &&
      axios
        .post(
          `${baseUrl}/dashboard/preview`,
          {
            id: pid
          },
          {
            headers: {
              'Content-Type': 'application/json',
              token: Cookies.get('accessToken') || ''
            }
          }
        )
        .then((res) => setData(res.data));
  }, [pid]);
  console.log(data);

  return (
    <DashboardStyled>
      <h1>{t('preview-title-1')}</h1>
      <p>{t('preview-text-1')}</p>
      {Object.keys(data).length > 0 && (
        <main>
          <h2>{data.sale.title}</h2>
          <p>{data.sale.address}</p>
          <ViewImagesContainer>
            {data.sale.images.map((item, index) =>
              index === 0 ? (
                <ViewImageMain>
                  <ViewImage
                    key={item + index}
                    src={item}
                    alt={data.sale.title}
                    width={390}
                    height={380}
                  />
                </ViewImageMain>
              ) : (
                <ViewImageSide>
                  <ViewImage
                    key={item + index}
                    src={item}
                    alt={data.sale.title}
                    width={200}
                    height={200}
                  />
                </ViewImageSide>
              )
            )}
          </ViewImagesContainer>
          <h3>{t('preview-title-2') + data.author.username}</h3>
          <p>
            {t('preview-types-1')} {data.sale.details.guests} ·{' '}
            {t('preview-types-2')} {data.sale.details.bathrooms} ·{' '}
            {t('preview-types-3')} {data.sale.details.bedrooms} ·{' '}
            {t('preview-types-4')} {data.sale.details.rooms} ·{' '}
          </p>
          <ViewArticles>
            <ViewArticleOne>
              <p>{data.sale.description}</p>
              <aside>
                <h4>{t('preview-title-3')}</h4>
                <ViewOfferContainer>
                  {data.sale.offer.map((item) => (
                    <ViewOffer>
                      <AtomIcon
                        name={`icons/view/${LoweReplace(
                          item.toLocaleLowerCase()
                        )}`}
                      />
                      <p key={item}>{item}</p>
                    </ViewOffer>
                  ))}
                </ViewOfferContainer>
              </aside>
            </ViewArticleOne>
            <article></article>
          </ViewArticles>
        </main>
      )}
    </DashboardStyled>
  );
};

export default View;
