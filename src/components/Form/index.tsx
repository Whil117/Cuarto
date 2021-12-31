import { ContainerFormButton, ContainerFormInput, Form } from '@Styles/pages';
import useTranslation from 'next-translate/useTranslation';
import { ChangeEvent, FC } from 'react';
interface IProps {
  title: string;
  buttontext: string;
  question: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: ({
    event
  }: {
    event: {
      preventDefault: () => void;
    };
  }) => Promise<void>;
  user: {
    username: string;
    password: string;
  };
  show: boolean;
}

const FormLoggerUser: FC<IProps> = ({
  title,
  buttontext,
  question,
  handleChange,
  user,
  handleSubmit
}) => {
  const { t } = useTranslation('common');
  return (
    <>
      <h1>{title}</h1>
      <Form onSubmit={(event) => handleSubmit({ event })}>
        <label htmlFor="user">
          <p>{t('form-login-title-3')}</p>
          <ContainerFormInput
            type="text"
            id="user"
            placeholder={t('form-login-placeholder-1')}
            name="username"
            value={user.username}
            onChange={handleChange}
            autoComplete="off"
          />
        </label>
        <label htmlFor="pass">
          <p>{t('form-login-title-4')}</p>
          <ContainerFormInput
            type="password"
            name="password"
            id="pass"
            value={user.password}
            autoComplete="off"
            placeholder={t('form-login-placeholder-2')}
            onChange={handleChange}
          />
        </label>
        <ContainerFormButton type="submit">{buttontext}</ContainerFormButton>
      </Form>
      <p>{question}</p>
    </>
  );
};

export default FormLoggerUser;
