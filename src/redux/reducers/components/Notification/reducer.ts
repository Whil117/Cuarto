import { NotificationColors } from '@Styles/components/Notification';

const initState = {
  notification: false,
  message: {
    title: '',
    type: typeof NotificationColors,
    text: ''
  }
};
export type State = {
  notification: boolean;
  message: {
    title: string;
    type: keyof typeof NotificationColors;
    text: string;
  };
};
type Action = {
  type: keyof typeof TypesReducer;
  payload: State;
};
const TypesReducer = {
  ERROR: (state = initState, payload: Action) => ({
    ...state,
    notification: true,
    message: {
      title: payload.payload?.message.title,
      type: 'danger',
      text: payload.payload?.message.text
    }
  }),
  SUCCESS: (state = initState, action: Action) => ({
    ...state,
    notification: true,
    message: {
      title: action.payload?.message.title,
      type: 'default',
      text: action.payload?.message.text
    }
  }),
  HIDE: () => ({
    ...initState
  })
};

const reducer = (state = initState, action: Action) => {
  const { type } = action;
  const handler = TypesReducer[type];
  const newState = handler ? handler(state, action) : state;

  return newState;
};

export default reducer;
