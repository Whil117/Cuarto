import { createStore, combineReducers } from 'redux';
import AddSaleReducer from 'redux/reducers/pages/addsale/reducer';
import UserReducer from 'redux/reducers/pages/user/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';
import notificationReducer from 'redux/reducers/components/Notification/reducer';

const rootReducer = combineReducers({
  addsale: AddSaleReducer,
  user: UserReducer,
  notification: notificationReducer
});

const createNoopStorage = () => {
  return {
    getItem(_key: any) {
      return Promise.resolve(null);
    },
    setItem(_key: any, value: any) {
      return Promise.resolve(value);
    },
    removeItem(_key: any) {
      return Promise.resolve();
    }
  };
};

const storage =
  typeof window === 'undefined'
    ? createNoopStorage()
    : createWebStorage('local');

const PersistConfig = {
  key: 'root',
  storage
};

const PersistedReducer = persistReducer(PersistConfig, rootReducer);

const useStore = () => {
  const store = createStore(PersistedReducer, composeWithDevTools());
  const persistor = persistStore(store);
  return { store, persistor };
};

export default useStore;
