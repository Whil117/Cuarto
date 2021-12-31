import { css } from '@emotion/react';
import { DashboardStyled } from '@Styles/global';
import { AddSaleSubmitButton } from '@Styles/pages/dashboard/addsale';
import withAuth from 'auth/withAuth';
import Cookies from 'js-cookie';
import Router from 'next/router';
import { FC } from 'react';

interface IProps {}

const Settings: FC = () => {
  const handleLogOut = () => {
    Cookies.remove('accessToken');
    Router.replace('/');
  };
  const styles = css`
    width: 150px;
    height: 40px;
    background: #ec2929;
  `;

  return (
    <DashboardStyled>
      <h1>Settings</h1>
      <AddSaleSubmitButton onClick={handleLogOut} {...styles}>
        Log out
      </AddSaleSubmitButton>
    </DashboardStyled>
  );
};

export default withAuth(Settings);
