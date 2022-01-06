import baseUrl from '@Assets/cuartobackend';
import withAuth from '@Auth/withAuth';
import AtomIcon from '@Components/Atoms/Svg';
import { ActionError, ActionSuccess } from '@Redux/actions/actions';
import { DashboardStyled } from '@Styles/global';
import {
  ListAnchor,
  Listbody,
  ListContainer,
  ListItem,
  ListOptions
} from '@Styles/pages/dashboard/list';
import { SettingsH1, SettingsP } from '@Styles/pages/dashboard/settings';
import { ViewFavoriteButton } from '@Styles/pages/dashboard/view';
import { SelectorProps } from '@Types/pages/dashboard/addsale/types';
import axios from 'axios';
import Cookies from 'js-cookie';
import { NextPage } from 'next';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

type StateList = {
  id: string;
  title: string;
  address: string;
};

const List: NextPage = () => {
  const [list, setList] = useState<StateList[]>([]);
  const { t } = useTranslation('common');
  const dispatch = useDispatch();
  useEffect(() => {
    const url = `${baseUrl}/dashboard/listsales`;
    axios
      .get(url, {
        headers: {
          'Content-Type': 'application/json',
          token: Cookies.get('accessToken') || ''
        }
      })
      .then((res) => {
        if (res.data.listSales) setList(res.data.listSales);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDeleteItem = async (id: string) => {
    setList(list.filter((item) => item.id !== id));
    await axios
      .post(
        `${baseUrl}/dashboard/listsales/item`,
        {
          id
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
      <SettingsH1>{t('list-title-1')}</SettingsH1>
      <SettingsP>{t('list-text-1')}</SettingsP>
      <ListContainer>
        {list?.map((item) => (
          <ListItem>
            <ListAnchor key={item.id}>
              <Link
                href={{
                  pathname: '/dashboard/view/[pid]',
                  query: {
                    pid: item.id
                  }
                }}
                passHref
              >
                <Listbody>
                  <h3>{item.title}</h3>
                  <p>{item.address}</p>
                </Listbody>
              </Link>
            </ListAnchor>
            <ListOptions>
              <ViewFavoriteButton onClick={() => handleDeleteItem(item.id)}>
                <AtomIcon name="icons/list/trash" />
              </ViewFavoriteButton>
            </ListOptions>
          </ListItem>
        ))}
      </ListContainer>
    </DashboardStyled>
  );
};

export default withAuth(List);
