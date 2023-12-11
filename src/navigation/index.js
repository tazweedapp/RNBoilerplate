import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';
import { THEMES } from 'constants/themes';
import { useTheme } from 'utils/ThemeProvider';
import { useSelector } from 'react-redux';
import { selectAuthToken } from '@redux/slices/authSlice';

const Navigation = () => {
  const isAuthenticated = !!useSelector(selectAuthToken);

  const theme = useTheme();

  return (
    <NavigationContainer theme={THEMES[theme]}>
      {isAuthenticated ? <MainNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default Navigation;
