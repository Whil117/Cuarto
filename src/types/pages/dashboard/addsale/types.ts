import { State } from '@Types/helpers/pages/addsale/reducer';
import { User } from '@Types/redux/reducers/pages/user/types';

export type Image = {
  target: {
    files: FileList | null;
  };
};
export type ChangeState = {
  target: {
    name: string;
    value: string;
  };
};
export type SelectorProps = {
  addsale: State;
  user: User['user'];
};
