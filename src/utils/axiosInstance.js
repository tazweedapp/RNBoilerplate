import { store } from '@redux/store';
import axios from 'axios';
import config from 'react-native-config';
import { I18nManager } from 'react-native';

const DOMAIN = config.DOMAIN || '';

const handleError = (error) => {
  // RETURN CUSTOM AXIOS ERROR HERE
  return {
    message: error?.message || defaultError(),
    code: `${error?.response?.status || error?.code}`,
  };
};

const checkInternetError = () => {
  return I18nManager.isRTL
    ? 'لا يوجد اتصال بالانترنت'
    : 'Check your internet connection';
};

const defaultError = () => {
  return I18nManager.isRTL
    ? 'حدث خطأ ما! حاول مرة أخري.'
    : 'Something went wrong! Try again later.';
};

const errorHandler = (error) => {
  if (!error.response) {
    return Promise.reject(checkInternetError());
  }
  if (handleError(error)) {
    return Promise.reject(handleError(error));
  }
  return Promise.reject({ ...error });
};

const axiosInstance = axios.create({
  baseURL: `${DOMAIN}`,
  headers: {
    'Platform-Type': 'APP',
  },
});

axiosInstance.interceptors.request.use(
  async (config) => {
    try {
      const token = store.getState()?.auth?.token;
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch (error) {
      console.error('Error retrieving token:', error);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(undefined, (error) =>
  errorHandler(error)
);

export default axiosInstance;
