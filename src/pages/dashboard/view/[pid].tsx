import baseUrl from '@Assets/cuartobackend';
import AtomIcon from '@Components/Atoms/Svg';
import LoweReplace from '@Helpers/LoweReplace';
import { ActionError, ActionSuccess } from '@Redux/actions/actions';
import { DashboardStyled } from '@Styles/global';
import {
  SettingsH1,
  SettingsH2,
  SettingsH3,
  SettingsH4,
  SettingsP
} from '@Styles/pages/dashboard/settings';
import {
  ViewArticleOne,
  ViewArticles,
  ViewImage,
  ViewImageMain,
  ViewImagesContainer,
  ViewImageSide,
  ViewOffer,
  ViewOfferContainer,
  ViewHeader,
  ViewBox,
  ViewFavoriteButton
} from '@Styles/pages/dashboard/view';
import axios from 'axios';
import Cookies from 'js-cookie';
import { NextPage } from 'next';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

type Data = {
  author: {
    date: string;
    username: string;
    _id: string;
  };
  sale: {
    favorite: boolean;
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
  const dispatch = useDispatch();
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

  const handleChange = async () => {
    setData({
      ...data,
      sale: {
        ...data.sale,
        favorite: !data.sale.favorite
      }
    });
    await axios
      .put(
        `${baseUrl}/dashboard/favoritesale`,
        {
          _id: data.sale._id,
          favorite: !data.sale.favorite
        },
        {
          headers: {
            'Content-Type': 'application/json',
            token: Cookies.get('accessToken') || ''
          }
        }
      )
      .then((res) => {
        dispatch(
          ActionSuccess({
            title: res.data.message.title,
            text: res.data.message.text
          })
        );
      })
      .catch((err) => {
        dispatch(
          ActionError({
            title: err.response.data.message.title,
            text: err.response.data.message.text
          })
        );
      });
  };

  return (
    <DashboardStyled>
      <SettingsH1>{t('preview-title-1')}</SettingsH1>
      <SettingsP>{t('preview-text-1')}</SettingsP>
      {Object.keys(data).length > 0 && (
        <ViewBox>
          <ViewHeader>
            <div>
              <SettingsH2>{data.sale.title}</SettingsH2>
              <SettingsP>{data.sale.address}</SettingsP>
            </div>
            <ViewFavoriteButton onClick={handleChange}>
              <AtomIcon
                name={
                  data.sale.favorite
                    ? 'icons/navbar/favorite'
                    : 'icons/navbar/hearthempty'
                }
                active={data.sale.favorite}
              />
            </ViewFavoriteButton>
          </ViewHeader>
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
          <SettingsH3>{t('preview-title-2') + data.author.username}</SettingsH3>
          <SettingsP>
            {t('preview-types-1')} {data.sale.details.guests} ·{' '}
            {t('preview-types-2')} {data.sale.details.bathrooms} ·{' '}
            {t('preview-types-3')} {data.sale.details.bedrooms} ·{' '}
            {t('preview-types-4')} {data.sale.details.rooms} ·{' '}
          </SettingsP>
          <ViewArticles>
            <ViewArticleOne>
              <SettingsP>{data.sale.description}</SettingsP>
              <aside>
                <SettingsH4>{t('preview-title-3')}</SettingsH4>
                <ViewOfferContainer>
                  {data.sale.offer.map((item) => (
                    <ViewOffer>
                      <AtomIcon
                        name={`icons/view/${LoweReplace(
                          item.toLocaleLowerCase()
                        )}`}
                      />
                      <SettingsP key={item}>{item}</SettingsP>
                    </ViewOffer>
                  ))}
                </ViewOfferContainer>
              </aside>
            </ViewArticleOne>
            <article></article>
          </ViewArticles>
        </ViewBox>
      )}
    </DashboardStyled>
  );
};

export default View;
