type State = {
  title: string;
  description: string;
  price: string;
  address: string;
  images: string[];
  details:
    | {
        rooms: string;
        bathrooms: string;
        bedrooms: string;
        kitchens: string;
      }
    | any;
  offer: string[];
};

type IAction = {
  type: string;
  payload: any;
};
const reducer = (state: State, action: IAction): State => {
  switch (action.type) {
    case 'ADD_IMAGES':
      return {
        ...state,
        images: [...state.images, action.payload.images]
      };
    case 'DELETE_IMAGE':
      return {
        ...state,
        images: state.images.filter((image) => image !== action.payload.url)
      };
    case 'CHANGE':
      return {
        ...state,
        [action.payload.event.target.name]: action.payload.event.target.value
      };
    case 'ADD_DETAILS':
      return {
        ...state,
        details: {
          ...state.details,
          [action.payload.event.target.name]: action.payload.event.target.value
        }
      };
    case 'ADD_OFFER':
      return {
        ...state,
        offer: (function () {
          if (
            state.offer.find(
              (offer) => offer === action.payload.event.target.value
            )
          ) {
            return state.offer;
          } else {
            return [...state.offer, action.payload.event.target.value];
          }
        })()
      };
    case 'DELETE_OFFER':
      return {
        ...state,
        offer: state.offer.filter((offer) => offer !== action.payload)
      };
    default:
      return state;
  }
};
export default reducer;
