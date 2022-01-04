import { Action, User } from '@Types/redux/reducers/pages/user/types';
import Cookies from 'js-cookie';

const InitState = {
  _id: '',
  username: '',
  email: '',
  avatar: '',
  date: ''
};

export const TypesReducer = {
  SAVED_USER: (state = InitState, payload: User['user'] | undefined) => {
    if (payload) {
      return {
        ...state,
        _id: payload._id,
        username: payload.username,
        avatar: payload.avatar,
        email: payload.email,
        date: payload.date
      };
    }
    return state;
  },
  LOG_OUT: (state = InitState) => {
    Cookies.remove('accessToken');
    return InitState;
  },
  CHANGE_AVATAR: (
    state = InitState,
    payload: User['user'] | undefined | string
  ) => ({
    ...state,
    avatar: payload
  })
};

const reducer = (state = InitState, action: Action) => {
  const { type, payload } = action;
  const handler = TypesReducer[type];
  const newState = handler ? handler(state, payload) : state;
  return newState;
};
export default reducer;
