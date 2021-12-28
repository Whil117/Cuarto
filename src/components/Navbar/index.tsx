import AtomIcon from '@Components/Atoms/Svg';
import LoweReplace from '@Helpers/LoweReplace';
import * as S from '@Styles/components/Navbar';
import { colors } from '@Styles/global/colors';
import Link from 'next/link';
import { FC } from 'react';

interface IProps {
  pathname: string;
}

const Navbar: FC<IProps> = ({ pathname }) => {
  const sections = ['Dashboard', 'Add sale', 'Favorite', 'List'];
  console.log(pathname);

  return (
    <S.NavbarStyled>
      <S.NavbarArticles>
        <S.NavbarHeader>
          <AtomIcon name='icons/navbar/cuarto' color={colors.blue} />
          <h1>Cuarto</h1>
        </S.NavbarHeader>
        <div>
          {sections.map((section) => (
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
                <p>{section}</p>
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
            <p>Settings</p>
          </S.NavbarListItem>
        </Link>
      </S.NavbarArticles>
    </S.NavbarStyled>
  );
};

export default Navbar;
