import { DashboardStyled } from '@Styles/global';
import withAuth from '@Auth/withAuth';
import { FC, useEffect, useState } from 'react';
import useTranslation from 'next-translate/useTranslation';
import baseUrl from '@Assets/cuartobackend';
import axios from 'axios';
import Cookies from 'js-cookie';
import {
  ListAnchor,
  Listbody,
  ListContainer,
  ListItem
} from '@Styles/pages/dashboard/list';
import Link from 'next/link';
type StateList = {
  id: string;
  title: string;
  address: string;
};

interface IProps {}

const Favorite: FC<IProps> = (props) => {
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
      <h1>{t('favorite-title-1')}</h1>
      <p>{t('favorite-tilte-text-1')}</p>
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
