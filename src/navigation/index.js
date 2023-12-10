import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';
import { THEMES } from 'constants/themes';
import { useTheme } from 'utils/ThemeProvider';

const Navigation = () => {
  const isAuthenticated = false;

  const theme = useTheme();

  return (
    <NavigationContainer theme={THEMES[theme]}>
      {isAuthenticated ? <AuthNavigator /> : <MainNavigator />}
    </NavigationContainer>
  );
};

export default Navigation;
