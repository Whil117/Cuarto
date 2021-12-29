import AtomIcon from '@Components/Atoms/Svg';
import LoweReplace from '@Helpers/LoweReplace';
import * as S from '@Styles/components/Navbar';
import useTranslation from 'next-translate/useTranslation';
import { colors } from '@Styles/global/colors';
import Link from 'next/link';
import { ChangeEvent, FC } from 'react';
import { useRouter } from 'next/router';
import setLanguage from 'next-translate/setLanguage';

const Navbar: FC = () => {
  const sections = ['Dashboard', 'Add sale', 'Favorite', 'List'];
  const sections_traslate = [
    'nav-bar-section-1',
    'nav-bar-section-2',
    'nav-bar-section-3',
    'nav-bar-section-4'
  ];
  const { t } = useTranslation('common');
  const { locale, pathname } = useRouter();

  const handleChangeLanguage = async (e: ChangeEvent<HTMLSelectElement>) => {
    await setLanguage(e.target.value);
  };

  return (
    <S.NavbarStyled>
      <S.NavbarArticles>
        <S.NavbarHeader>
          <AtomIcon name='icons/navbar/cuarto' color={colors.blue} />
          <h1>Cuarto</h1>
        </S.NavbarHeader>
        <select
          name=''
          id=''
          defaultValue={locale}
          onChange={handleChangeLanguage}
        >
          <option value='en' defaultValue={locale}>
            En
          </option>
          <option value='es' defaultValue={locale}>
            Es
          </option>
        </select>
        <div>
          {sections.map((section, index) => (
            <Link
              key={section}
              href={
                section === 'Dashboard'
                  ? '/dashboard/'
                  : `/dashboard/${LoweReplace(section)}`
              }
              passHref
            >
              <S.NavbarListItem
                checked={
                  pathname ===
                  `/dashboard${
                    LoweReplace(section) === 'dashboard'
                      ? ''
                      : `/${LoweReplace(section)}`
                  }`
                }
              >
                <AtomIcon
                  name={`icons/navbar/${LoweReplace(section)}`}
                  active={
                    pathname ===
                    `/dashboard${
                      LoweReplace(section) === 'dashboard'
                        ? ''
                        : `/${LoweReplace(section)}`
                    }`
                  }
                />
                <p>{t(sections_traslate[index])}</p>
              </S.NavbarListItem>
            </Link>
          ))}
        </div>
      </S.NavbarArticles>
      <S.NavbarArticles>
        <Link key='Settings' href='/dashboard/settings' passHref>
          <S.NavbarListItem
            checked={`/dashboard/${LoweReplace('settings')}` === pathname}
          >
            <AtomIcon
              name={`icons/navbar/${LoweReplace('Settings')}`}
              active={
                pathname ===
                `/dashboard${
                  LoweReplace('settings') === 'dashboard'
                    ? ''
                    : `/${LoweReplace('settings')}`
                }`
              }
            />

            <p>{t('nav-bar-section-5')}</p>
          </S.NavbarListItem>
        </Link>
      </S.NavbarArticles>
    </S.NavbarStyled>
  );
};

export default Navbar;
