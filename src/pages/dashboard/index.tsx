import { DashboardStyled } from '@Styles/global';
import withAuth from '@Auth/withAuth';
import { NextPage } from 'next';
import { useDispatch, useSelector } from 'react-redux';
import { User } from '@Types/redux/reducers/pages/user/types';
import useTranslation from 'next-translate/useTranslation';
import shortcuts from '@Assets/shortcuts.json';
import AtomIcon from '@Components/Atoms/Svg';
import { DashboardCard, DashboardCards } from '@Styles/pages/dashboard';
import Link from 'next/link';

const Dashboard: NextPage = () => {
  const data = useSelector((state: { user: User['user'] }) => state.user);
  const { t } = useTranslation('common');
  const dispatch = useDispatch();

  return (
    <DashboardStyled>
      <h1>{t('dashboard-salute') + ' ' + data.username}</h1>
      <p>{t('dashboard-subtitle-1')}</p>
      <DashboardCards>
        {shortcuts.map((shortcut) => (
          <Link passHref href={shortcut.url}>
            <DashboardCard>
              <AtomIcon name={shortcut.type} width="60px" height="60px" />
              <p>{shortcut.title}</p>
            </DashboardCard>
          </Link>
        ))}
      </DashboardCards>
    </DashboardStyled>
  );
};

export default withAuth(Dashboard);
