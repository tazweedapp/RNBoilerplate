import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '@screens/Login';
import ROUTES from 'constants/routes';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        presentation: 'modal',
        gestureEnabled: true,
      }}
      initialRouteName={ROUTES.LOGIN}
    >
      <Stack.Screen name={ROUTES.LOGIN} component={Login} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
