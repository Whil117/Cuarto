import { DashboardStyled } from '@Styles/global';
import withAuth from 'auth/withAuth';
import { FC } from 'react';

interface IProps {}

const List: FC<IProps> = (props) => {
  return (
    <DashboardStyled>
      <h1>List</h1>
    </DashboardStyled>
  );
};

export default withAuth(List);
