import { State, Event } from '@Types/helpers/pages/types';

const TypesReducer = {
  ADD_FIELD: (state: State, payload: Event | undefined) => {
    if (payload) {
      return {
        ...state,
        [payload.event.target.name]: payload.event.target.value
      };
    }
    return state;
  },
  SHOW_FORM: (state: State) => ({
    ...state,
    username: '',
    password: '',
    show: !state.show,
    error: false
  }),
  ERROR_FORM: (state: State) => ({
    ...state,
    error: true
  })
};

type IAction = {
  type: keyof typeof TypesReducer;
  payload?: Event | undefined;
};

const reducer = (state: State, action: IAction) => {
  const { type, payload } = action;
  const handler = TypesReducer[type];
  const newState = handler ? handler(state, payload) : state;

  return newState;
};
export default reducer;
