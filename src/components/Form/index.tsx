import {
  ContainerFormButton,
  ContainerFormInput,
  Form,
  TitleLabel
} from '@Styles/pages';
import useTranslation from 'next-translate/useTranslation';
import { ChangeEvent, FC } from 'react';
interface IProps {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: ({
    event
  }: {
    event: {
      preventDefault: () => void;
    };
  }) => void;
  props: {
    title: string;
    buttontext: string;
    question: string;
  };
  form: {
    username: string;
    password: string;
    show: boolean;
    error: boolean;
  };
}

const FormLoggerUser: FC<IProps> = ({
  props,
  handleChange,
  form,
  handleSubmit
}) => {
  const { t } = useTranslation('common');

  return (
    <>
      <h1>{props.title}</h1>
      <Form onSubmit={(event) => handleSubmit({ event })}>
        <label htmlFor="user">
          <TitleLabel>{t('form-login-title-3')}</TitleLabel>
          <ContainerFormInput
            type="text"
            id="user"
            error={form.username === '' && form.error}
            {...(form.password === '' &&
              form.error && {
                ...{ placeholder: t('form-login-placeholder-error-1') }
              })}
            name="username"
            value={form.username}
            onChange={handleChange}
            autoComplete="off"
          />
        </label>
        <label htmlFor="pass">
          <TitleLabel>{t('form-login-title-4')}</TitleLabel>
          <ContainerFormInput
            type="password"
            name="password"
            id="pass"
            error={form.password === '' && form.error}
            {...(form.password === '' &&
              form.error && {
                ...{ placeholder: t('form-login-placeholder-error-2') }
              })}
            value={form.password}
            autoComplete="off"
            onChange={handleChange}
          />
        </label>
        <ContainerFormButton type="submit">
          {props.buttontext}
        </ContainerFormButton>
      </Form>
      <p>{props.question}</p>
    </>
  );
};

export default FormLoggerUser;
