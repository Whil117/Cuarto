import { DashboardStyled } from '@Styles/global';
import withAuth from 'auth/withAuth';
import { NextPage } from 'next';

const Dashboard: NextPage = (props) => {
  return (
    <DashboardStyled>
      <h1>main page dashboard</h1>
    </DashboardStyled>
  );
};

export default withAuth(Dashboard);
