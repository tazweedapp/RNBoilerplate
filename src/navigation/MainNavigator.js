import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ROUTES from 'contants/routes';
import Home from '@screens/Home';

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={ROUTES.HOME}
    >
      <Stack.Screen name={ROUTES.HOME} component={Home} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
