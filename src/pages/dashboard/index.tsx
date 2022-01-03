import { DashboardStyled } from '@Styles/global';
import withAuth from '@Auth/withAuth';
import { NextPage } from 'next';
import { useDispatch, useSelector } from 'react-redux';
import { User } from '@Types/redux/reducers/pages/user/types';
import useTranslation from 'next-translate/useTranslation';

const Dashboard: NextPage = () => {
  const data = useSelector((state: { user: User['user'] }) => state.user);
  const { t } = useTranslation('common');
  const dispatch = useDispatch();

  return (
    <DashboardStyled>
      <h1>{t('dashboard-salute') + ' ' + data.username}</h1>
      <button
        onClick={() => {
          dispatch({
            type: 'ERROR',
            payload: {
              message: {
                title: 'Error',
                text: 'Error'
              }
            }
          });
        }}
      >
        ERROR
      </button>
      <button
        onClick={() => {
          dispatch({
            type: 'SUCCESS',
            payload: {
              message: {
                title: 'Success',
                text: 'Success'
              }
            }
          });
        }}
      >
        SUCESS
      </button>
    </DashboardStyled>
  );
};

export default withAuth(Dashboard);
