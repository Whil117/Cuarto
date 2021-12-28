import { DashboardStyled } from '@Styles/pages/dashboard';
import { FC } from 'react';

interface IProps {}

const List: FC<IProps> = (props) => {
  return (
    <DashboardStyled>
      <h1>List</h1>
    </DashboardStyled>
  );
};

export default List;
