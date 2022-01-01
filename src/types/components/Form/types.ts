import { ChangeEvent, SyntheticEvent } from 'react';

export type ComponentProps = {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: SyntheticEvent) => Promise<void>;
  componentProps: {
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
};
