import baseUrl from '@Assets/cuartobackend';
import withAuth from '@Auth/withAuth';
import { DashboardStyled } from '@Styles/global';
import {
  ListAnchor,
  Listbody,
  ListContainer,
  ListItem
} from '@Styles/pages/dashboard/list';
import { SettingsH1, SettingsP } from '@Styles/pages/dashboard/settings';
import axios from 'axios';
import Cookies from 'js-cookie';
import { NextPage } from 'next';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import { useEffect, useState } from 'react';
type StateList = {
  id: string;
  title: string;
  address: string;
};

const Favorite: NextPage = () => {
  const { t } = useTranslation('common');
  const [list, setList] = useState<StateList[]>([]);

  useEffect(() => {
    const url = `${baseUrl}/dashboard/favoritesale`;
    axios
      .get(url, {
        headers: {
          'Content-Type': 'application/json',
          token: Cookies.get('accessToken') || ''
        }
      })
      .then((res) => {
        console.log(res.data);
        setList(res.data.favorites);
      });
  }, []);
  return (
    <DashboardStyled>
      <SettingsH1>{t('favorite-title-1')}</SettingsH1>
      <SettingsP>{t('favorite-tilte-text-1')}</SettingsP>
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
            {/* <ListOptions>
               <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
             </ListOptions> */}
          </ListItem>
        ))}
      </ListContainer>
    </DashboardStyled>
  );
};

export default withAuth(Favorite);
