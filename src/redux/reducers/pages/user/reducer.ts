import { Action, User } from '@Types/redux/reducers/pages/user/types';
import Cookies from 'js-cookie';

const InitState = {
  _id: '',
  username: '',
  date: ''
};

export const TypesReducer = {
  SAVED_USER: (state = InitState, payload: User['user'] | undefined) => {
    if (payload) {
      return {
        ...state,
        _id: payload._id,
        username: payload.username,
        date: payload.date
      };
    }
    return state;
  },
  LOG_OUT: (state = InitState) => {
    Cookies.remove('accessToken');
    return InitState;
  }
};

const reducer = (state = InitState, action: Action) => {
  const { type, payload } = action;
  const handler = TypesReducer[type];
  const newState = handler ? handler(state, payload) : state;

  return newState;
};
export default reducer;
