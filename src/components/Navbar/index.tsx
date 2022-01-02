import AtomIcon from '@Components/Atoms/Svg';
import SelectLanguage from '@Components/SelectLanguage';
import LoweReplace from '@Helpers/LoweReplace';
import * as S from '@Styles/components/Navbar';
import { colors } from '@Styles/global/colors';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';

const Navbar: FC = () => {
  const sections = ['Dashboard', 'Add sale', 'Favorite', 'List'];
  const sections_traslate = [
    'nav-bar-section-1',
    'nav-bar-section-2',
    'nav-bar-section-3',
    'nav-bar-section-4'
  ];
  const { t } = useTranslation('common');
  const { pathname } = useRouter();

  return (
    <S.NavbarStyled>
      <S.NavbarArticles>
        <S.NavbarHeader>
          <AtomIcon name="icons/navbar/cuarto" color={colors.blue} />
          <h1>Cuarto</h1>
        </S.NavbarHeader>
        <SelectLanguage />
        <div>
          <S.NavbarSubtitle>MENU</S.NavbarSubtitle>
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
        <S.NavbarSubtitle>SETTINGS</S.NavbarSubtitle>
        <Link key="Settings" href="/dashboard/settings" passHref>
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
