import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import authSlice from '@redux/slices/authSlice';

const authPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const combinedReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authSlice),
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
      .concat([]),
});

const persistor = persistStore(store);

export { store, persistor };
