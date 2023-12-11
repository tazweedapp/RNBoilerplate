import Toast from 'react-native-toast-message';

export const useToast = () => {
  const toastTitle = {
    error: 'error',
    success: 'success',
  };

  const showToast = (type = 'error', message) => {
    Toast.show({
      type,
      position: 'top',
      text1: toastTitle[type],
      text2: message || 'Something went wrong',
      visibilityTime: 4000,
      autoHide: true,
      topOffset: 50,
      bottomOffset: 40,
    });
  };

  return showToast;
};
