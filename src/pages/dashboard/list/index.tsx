import baseUrl from '@Assets/cuartobackend';
import withAuth from '@Auth/withAuth';
import { DashboardStyled } from '@Styles/global';
import {
  ListAnchor,
  ListContainer,
  ListItem
} from '@Styles/pages/dashboard/list';
import { User } from '@Types/redux/reducers/pages/user/types';
import axios from 'axios';
import Cookies from 'js-cookie';
import { NextPage } from 'next';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

type SelectorProps = {
  user: User['user'];
};
type StateList = {
  id: string;
  title: string;
  address: string;
};

const List: NextPage = () => {
  const data = useSelector((state: SelectorProps) => state.user);
  const [list, setList] = useState<StateList[]>([]);
  const { t } = useTranslation('common');
  const url = `${baseUrl}/dashboard/listsales`;

  useEffect(() => {
    axios
      .post(
        url,
        {
          id: data._id
        },
        {
          headers: {
            'Content-Type': 'application/json',
            token: Cookies.get('accessToken') || ''
          }
        }
      )
      .then((res) => {
        if (res.data.listSales) {
          setList(res.data.listSales);
        }
      });
  }, []);
  console.log('Esta vaina se esta disparando', list);

  return (
    <DashboardStyled>
      <h1>{t('list-title-1')}</h1>
      <p>{t('list-text-1')}</p>
      <ListContainer>
        {list?.map((item) => (
          <Link
            href={{
              pathname: '/dashboard/view/[pid]',
              query: {
                pid: item.id
              }
            }}
            passHref
          >
            <ListAnchor>
              <ListItem key={item.id}>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.address}</p>
                </div>
                {/* <div>
                  <button>CLick</button>
                </div> */}
              </ListItem>
            </ListAnchor>
          </Link>
        ))}
      </ListContainer>
    </DashboardStyled>
  );
};

export default withAuth(List);
