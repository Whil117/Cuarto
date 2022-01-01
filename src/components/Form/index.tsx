import * as S from '@Styles/pages';
import { ComponentProps } from '@Types/components/Form/types';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';

const FormLoggerUser: FC<ComponentProps> = (props) => {
  const { t } = useTranslation('common');

  return (
    <>
      <h1>{props.componentProps.title}</h1>
      <S.Form onSubmit={props.handleSubmit}>
        <label htmlFor="user">
          <S.TitleLabel>{t('form-login-title-3')}</S.TitleLabel>
          <S.ContainerFormInput
            type="text"
            id="user"
            error={props.form.username === '' && props.form.error}
            {...(props.form.password === '' &&
              props.form.error && {
                ...{ placeholder: t('form-login-placeholder-error-1') }
              })}
            name="username"
            value={props.form.username}
            onChange={props.handleChange}
            autoComplete="off"
          />
        </label>
        <label htmlFor="pass">
          <S.TitleLabel>{t('form-login-title-4')}</S.TitleLabel>
          <S.ContainerFormInput
            type="password"
            name="password"
            id="pass"
            error={props.form.password === '' && props.form.error}
            {...(props.form.password === '' &&
              props.form.error && {
                ...{ placeholder: t('form-login-placeholder-error-2') }
              })}
            value={props.form.password}
            autoComplete="off"
            onChange={props.handleChange}
          />
        </label>
        <S.ContainerFormButton type="submit">
          {props.componentProps.buttontext}
        </S.ContainerFormButton>
      </S.Form>
      <S.FormQuestion>{props.componentProps.question}</S.FormQuestion>
    </>
  );
};

export default FormLoggerUser;
