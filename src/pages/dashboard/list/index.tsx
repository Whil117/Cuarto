import baseUrl from '@Assets/cuartobackend';
import withAuth from '@Auth/withAuth';
import { DashboardStyled } from '@Styles/global';
import { User } from '@Types/redux/reducers/pages/user/types';
import axios from 'axios';
import Cookies from 'js-cookie';
import { FC, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
interface IProps {}

type SelectorProps = {
  user: User['user'];
};
type StateList = {
  id: string;
  title: string;
  address: string;
};

const List: FC<IProps> = (props) => {
  const data = useSelector((state: SelectorProps) => state.user);
  const dispatch = useDispatch();
  const [list, setList] = useState<StateList[]>([]);
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
        if (res.data) {
          setList(res.data.listSales);
        }
      });
  }, []);
  console.log(list);

  return (
    <DashboardStyled>
      <h1>List</h1>
      <ul>
        {list?.map((item) => (
          <li key={item.id}>
            <p>{item.title}</p>
            <p>{item.address}</p>
          </li>
        ))}
      </ul>
    </DashboardStyled>
  );
};

export default withAuth(List);
