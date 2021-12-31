import FormLoggerUser from '@Components/Form';
import SelectLanguage from '@Components/SelectLanguage';
import * as S from '@Styles/pages';
import { User } from '@Types/pages/types';
import axios from 'axios';
import Cookies from 'js-cookie';
import type { NextPage } from 'next';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import { ChangeEvent, useState } from 'react';

const Index: NextPage = () => {
  const [user, setUser] = useState<User>({} as User);
  const [show, setShow] = useState(false);
  const { t } = useTranslation('common');
  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async ({
    event
  }: {
    event: { preventDefault: () => void };
  }) => {
    event.preventDefault();
    const url = show
      ? 'https://cuartobackend.herokuapp.com/signup'
      : 'https://cuartobackend.herokuapp.com/signin';

    await axios
      .post(url, user)
      .then((res) => {
        if (res.data.token) {
          router.replace('/dashboard');
          Cookies.set('accessToken', res.data.token);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleShow = () => {
    setShow(!show);
    setUser({
      username: '',
      password: ''
    } as User);
  };

  return (
    <S.MainContainer>
      <S.Container>
        <S.ContainerForm>
          <SelectLanguage />
          {show ? (
            <FormLoggerUser
              title={t('form-login-title-2')}
              buttontext={t('form-login-title-2')}
              question={t('form-login-text-2')}
              {...{ user, handleChange, handleSubmit, show }}
            />
          ) : (
            <FormLoggerUser
              title={t('form-login-title-1')}
              buttontext={t('form-login-title-1')}
              question={t('form-login-text-1')}
              {...{ user, handleChange, handleSubmit, show }}
            />
          )}
          <S.FormButtonShow type="button" onClick={handleShow}>
            {show ? 'Sign In' : 'Sign Up'}
          </S.FormButtonShow>
        </S.ContainerForm>
        <S.ContainerImage src="/images/login/cuartobglogin.png" alt="" />
      </S.Container>
    </S.MainContainer>
  );
};

export default Index;
