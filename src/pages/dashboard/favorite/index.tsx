import { DashboardStyled } from '@Styles/global';
import withAuth from 'auth/withAuth';
import { FC } from 'react';

interface IProps {}

const Favorite: FC<IProps> = (props) => {
  return (
    <DashboardStyled>
      <h1>Favorite</h1>
    </DashboardStyled>
  );
};

export default withAuth(Favorite);
