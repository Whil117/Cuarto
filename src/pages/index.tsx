import baseUrl from '@Assets/cuartobackend';
import initState from '@Assets/pages/initstate';
import FormLoggerUser from '@Components/Form';
import SelectLanguage from '@Components/SelectLanguage';
import {
  ActionError,
  ActionSavedUser,
  ActionSuccess
} from '@Redux/actions/actions';
import * as S from '@Styles/pages';
import { User } from '@Types/redux/reducers/pages/user/types';
import axios from 'axios';
import Cookies from 'js-cookie';
import type { NextPage } from 'next';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import { ChangeEvent, SyntheticEvent, useReducer } from 'react';
import { useDispatch } from 'react-redux';
import reducer from 'redux/reducers/pages/reducer';

const Index: NextPage = () => {
  const [form, formDispatch] = useReducer(reducer, initState);
  const { t } = useTranslation('common');
  const router = useRouter();
  const dispatch = useDispatch();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    formDispatch({ type: 'ADD_FIELD', payload: { event } });

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    if (!form.username || !form.password) {
      formDispatch({ type: 'ERROR_FORM' });
    } else {
      const url = form.show ? `${baseUrl}/signup` : `${baseUrl}/signin`;
      await axios
        .post(url, {
          username: form.username,
          password: form.password
        })
        .then(({ data }: { data: User }) => {
          if (data.token) {
            Cookies.set('accessToken', data.token),
              dispatch(ActionSavedUser(data.user));

            dispatch(
              ActionSuccess({
                title: 'Success',
                text: "You're logged in"
              })
            );

            Cookies.set('user', JSON.stringify(data.user));
            setTimeout(() => router.replace('/dashboard'), 1000);
          }
        })
        .catch((err) => {
          err.response.data.message &&
            dispatch(
              ActionError({
                title: err.response.data.message.title,
                text: err.response.data.message.text
              })
            );
        });
    }
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
          <S.FormButtonShow
            type="button"
            onClick={() => formDispatch({ type: 'SHOW_FORM' })}
          >
            {form.show ? 'Sign In' : 'Sign Up'}
          </S.FormButtonShow>
        </S.ContainerForm>
        <S.ContainerImage
          src={
            form.show
              ? '/images/login/cuartobglogin.png'
              : '/images/login/cuartobglogin2.png'
          }
          alt="cuartologin"
        />
      </S.Container>
    </S.MainContainer>
  );
};

export default Index;
