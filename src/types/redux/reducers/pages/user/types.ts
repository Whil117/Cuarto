import { TypesReducer } from 'redux/reducers/pages/user/reducer';

type User = {
  token: string;
  user: {
    _id: string;
    username: string;
    date: string;
  };
};
type Action = {
  type: keyof typeof TypesReducer;
  payload: User['user'] | undefined;
};

export type { User, Action };
