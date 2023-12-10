import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useColorScheme } from 'react-native';

import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';
import { THEMES } from 'constants/themes';

const Navigation = () => {
  const isAuthenticated = false;

  const colorScheme = useColorScheme();

  return (
    <NavigationContainer theme={THEMES[colorScheme]}>
      {isAuthenticated ? <AuthNavigator /> : <MainNavigator />}
    </NavigationContainer>
  );
};

export default Navigation;
