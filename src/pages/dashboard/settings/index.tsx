import { css } from '@emotion/react';
import { DashboardStyled } from '@Styles/global';
import { AddSaleSubmitButton } from '@Styles/pages/dashboard/addsale';
import withAuth from '@Auth/withAuth';
import Cookies from 'js-cookie';
import Router from 'next/router';
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { User } from '@Types/redux/reducers/pages/user/types';

type SelectorProps = {
  user: User['user'];
};

const Settings: FC = () => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch({
      type: 'LOG_OUT'
    });
    Router.replace('/');
  };
  const styles = css`
    width: 150px;
    height: 40px;
    background: #ec2929;
    &:hover {
      background: #d82727;
    }
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
