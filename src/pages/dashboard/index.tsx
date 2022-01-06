import shortcuts from '@Assets/shortcuts.json';
import withAuth from '@Auth/withAuth';
import AtomIcon from '@Components/Atoms/Svg';
import { DashboardStyled } from '@Styles/global';
import { DashboardCard, DashboardCards } from '@Styles/pages/dashboard';
import { SettingsH1, SettingsP } from '@Styles/pages/dashboard/settings';
import { User } from '@Types/redux/reducers/pages/user/types';
import { NextPage } from 'next';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import { useSelector } from 'react-redux';

const Dashboard: NextPage = () => {
  const data = useSelector((state: { user: User['user'] }) => state.user);
  const { t } = useTranslation('common');
  return (
    <DashboardStyled>
      <SettingsH1>{t('dashboard-salute') + ' ' + data.username}</SettingsH1>
      <SettingsP>{t('dashboard-subtitle-1')}</SettingsP>
      <DashboardCards>
        {shortcuts.map((shortcut) => (
          <Link passHref href={shortcut.url}>
            <DashboardCard>
              <AtomIcon name={shortcut.type} width="60px" height="60px" />
              <SettingsP>{shortcut.title}</SettingsP>
            </DashboardCard>
          </Link>
        ))}
      </DashboardCards>
    </DashboardStyled>
  );
};

export default withAuth(Dashboard);
