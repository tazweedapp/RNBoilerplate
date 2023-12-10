import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';

const Navigation = () => {
  const isAuthenticated = false;
  return (
    <NavigationContainer>
      {isAuthenticated ? <AuthNavigator /> : <MainNavigator />}
    </NavigationContainer>
  );
};

export default Navigation;
