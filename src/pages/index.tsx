import baseUrl from '@Assets/cuartobackend';
import initState from '@Assets/pages/initstate';
import FormLoggerUser from '@Components/Form';
import SelectLanguage from '@Components/SelectLanguage';
import reducer from 'redux/reducers/pages/reducer';
import * as S from '@Styles/pages';
import axios from 'axios';
import Cookies from 'js-cookie';
import type { NextPage } from 'next';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import { ChangeEvent, SyntheticEvent, useReducer } from 'react';

const Index: NextPage = () => {
  const [form, dispatch] = useReducer(reducer, initState);
  const { t } = useTranslation('common');
  const router = useRouter();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'ADD_FIELD', payload: { event } });
  };

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    if (form.username === '' || form.password === '') {
      dispatch({ type: 'ERROR_FORM' });
    } else {
      const url = form.show ? `${baseUrl}/signup` : `${baseUrl}/signin`;
      await axios
        .post(url, {
          username: form.username,
          password: form.password
        })
        .then((res: { data: { token: string } }) =>
          res.data.token
            ? (router.replace('/dashboard'),
              Cookies.set('accessToken', res.data.token))
            : null
        )
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handleShow = () => {
    dispatch({ type: 'SHOW_FORM' });
  };

  return (
    <S.MainContainer>
      <S.Container>
        <S.ContainerForm>
          <SelectLanguage />
          {form.show ? (
            <FormLoggerUser
              componentProps={{
                title: t('form-login-title-2'),
                buttontext: t('form-login-title-2'),
                question: t('form-login-title-2')
              }}
              {...{ form, handleChange, handleSubmit }}
            />
          ) : (
            <FormLoggerUser
              componentProps={{
                title: t('form-login-title-1'),
                buttontext: t('form-login-title-1'),
                question: t('form-login-text-1')
              }}
              {...{ form, handleChange, handleSubmit }}
            />
          )}
          <S.FormButtonShow type="button" onClick={handleShow}>
            {form.show ? 'Sign In' : 'Sign Up'}
          </S.FormButtonShow>
        </S.ContainerForm>
        <S.ContainerImage
          src="/images/login/cuartobglogin.png"
          alt="cuartologin"
        />
      </S.Container>
    </S.MainContainer>
  );
};

export default Index;
