import { DashboardStyled } from '@Styles/pages/dashboard';
import { FC } from 'react';

interface IProps {}

const Favorite: FC<IProps> = (props) => {
  return (
    <DashboardStyled>
      <h1>Favorite</h1>
    </DashboardStyled>
  );
};

export default Favorite;
