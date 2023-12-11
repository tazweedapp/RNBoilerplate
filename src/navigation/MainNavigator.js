import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ROUTES from 'constants/routes';
import BottomNavigator from '@navigation/BottomNavigator';

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={ROUTES.HOME}
    >
      <Stack.Screen name="Bottom" component={BottomNavigator} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
