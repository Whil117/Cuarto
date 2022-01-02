import { DashboardStyled } from '@Styles/global';
import withAuth from '@Auth/withAuth';
import { FC } from 'react';
import useTranslation from 'next-translate/useTranslation';

interface IProps {}

const Favorite: FC<IProps> = (props) => {
  const { t } = useTranslation('common');
  return (
    <DashboardStyled>
      <h1>{t('favorite-title-1')}</h1>
      <p>{t('favorite-tilte-text-1')}</p>
    </DashboardStyled>
  );
};

export default withAuth(Favorite);
