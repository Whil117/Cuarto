import { ChangeState } from '@Types/pages/dashboard/addsale/types';
import { User } from '@Types/redux/reducers/pages/user/types';

type PayloadSucces = {
  title: string;
  text: string;
};

export const ActionSuccess = (message: PayloadSucces) => ({
  type: 'SUCCESS',
  payload: {
    message: message
  }
});
export const ActionError = (message: PayloadSucces) => ({
  type: 'ERROR',
  payload: {
    message: message
  }
});
export const ActionSavedUser = (payload: User['user']) => ({
  type: 'SAVED_USER',
  payload: payload
});

export const ActionDeleteOffer = (payload: string) => ({
  type: 'DELETE_OFFER',
  payload: payload
});
export const ActionCleanForm = () => ({
  type: 'CLEAN_FORM'
});

export const ActionDeleteImages = (url: string) => ({
  type: 'DELETE_IMAGES',
  payload: { url }
});

export const ActionChangeState = (event: ChangeState) => ({
  type: 'CHANGE',
  payload: { event }
});

export const ActionAddImages = (url: string) => ({
  type: 'ADD_IMAGES',
  payload: { images: url }
});

export const ActionLogout = () => ({
  type: 'LOG_OUT'
});
export const ActionAvatar = (url: string) => ({
  type: 'AVATAR',
  payload: url
});
