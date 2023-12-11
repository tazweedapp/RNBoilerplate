import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import authSlice from '@redux/slices/authSlice';
import { productsAPI } from '@redux/queries/productsAPI';

const authPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const combinedReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authSlice),
  [productsAPI.reducerPath]: productsAPI.reducer,
});

const logger = createLogger({
  predicate: (getState, action) => false,
});

const store = configureStore({
  reducer: combinedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
      .concat(logger)
      // ADD RTK MIDDLEWARE HERE
      .concat([productsAPI.middleware]),
});

const persistor = persistStore(store);

export { store, persistor };
