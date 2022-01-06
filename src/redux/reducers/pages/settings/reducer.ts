import { User } from '@Types/redux/reducers/pages/user/types';
import { Reducer } from 'redux';

const TypesReducers = {
  ADD_FIELD: (state: User['user'], action: Action) =>
    action.payload && {
      ...state,
      [action.payload.event.target.name]: action.payload.event.target.value
    },
  AVATAR: (state: User['user'], action: Action | { payload: string }) => ({
    ...state,
    avatar: action.payload
  }),
  ERROR_FORM: (state: User['user']) => ({
    ...state,
    error: true
  })
};
type Event = {
  event: {
    target: {
      name: string;
      value: string;
    };
  };
};

type SettingsPayload = Event;

type Action = {
  type: keyof typeof TypesReducers;
  payload?: SettingsPayload;
};

const reducer: Reducer = (state: User['user'], action: Action) => {
  const { type, payload } = action;
  const typeReducer = TypesReducers[type];
  const Reducer = typeReducer ? typeReducer(state, action) : state;
  return Reducer;
};
export default reducer;
