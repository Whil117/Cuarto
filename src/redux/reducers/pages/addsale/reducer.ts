import { initialState } from '@Assets/addCuarto';
import { PayloadEvent, State } from '@Types/helpers/pages/addsale/reducer';
export const TypesReducers = {
  ADD_IMAGES: (state: State, payload: { images: string }) => ({
    ...state,
    images: [...state.images, payload.images]
  }),
  DELETE_IMAGES: (state: State, payload: { url: string }) => ({
    ...state,
    images: state.images.filter((image) => image !== payload.url)
  }),
  CHANGE: (state: State, payload: PayloadEvent) => ({
    ...state,
    [payload.event.target.name]: payload.event.target.value
  }),
  ADD_DETAILS: (state: State, payload: PayloadEvent) => ({
    ...state,
    details: {
      ...state.details,
      [payload.event.target.name]: Number(payload.event.target.value)
    }
  }),
  ADD_OFFER: (state: State, payload: PayloadEvent) => ({
    ...state,
    offer: (() => {
      if (state.offer.find((offer) => offer === payload.event.target.value)) {
        return state.offer;
      } else {
        return [...state.offer, payload.event.target.value];
      }
    })()
  }),
  DELETE_OFFER: (state: State, payload: string) => ({
    ...state,
    offer: state.offer.filter((offer) => offer !== payload)
  }),
  ADD_PRICE: (state: State, payload: PayloadEvent) => ({
    ...state,
    price: Number(payload.event.target.value)
  }),
  CLEAN: () => initialState
};

type IAction = {
  type: keyof typeof TypesReducers;
  payload: any;
};

export const reducer = (state = initialState, action: IAction): State => {
  const { type, payload } = action;
  const TypeReducer = TypesReducers[type];
  const Reducer = TypeReducer ? TypeReducer(state, payload) : state;
  return Reducer;
};

export default reducer;
