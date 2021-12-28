import { DashboardStyled } from '@Styles/pages/dashboard';
import { FC } from 'react';

interface IProps {}

const Settings: FC<IProps> = (props) => {
  return (
    <DashboardStyled>
      <h1>Settings</h1>
    </DashboardStyled>
  );
};

export default Settings;
