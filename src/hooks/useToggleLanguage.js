import i18n from '@locales/i18n';
import { useCallback } from 'react';
import { I18nManager } from 'react-native';
import RNRestart from 'react-native-restart';

const useToggleLanguage = () => {
  const toggleLang = useCallback(() => {
    let restartTimeout;
    const nextLanguage = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(nextLanguage).then(() => {
      const isRTL = i18n.language === 'ar';
      I18nManager.forceRTL(isRTL);
      if (restartTimeout) {
        clearTimeout(restartTimeout);
      }
      restartTimeout = setTimeout(() => {
        RNRestart.Restart();
      }, 150);
    });
  }, [i18n]);

  return {
    toggleLang,
  };
};

export default useToggleLanguage;
