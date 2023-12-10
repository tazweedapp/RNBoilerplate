import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        presentation: 'modal',
        gestureEnabled: true,
      }}
      initialRouteName="Login"
    >
      {/* <Stack.Screen name="Login" component={Login} /> */}
    </Stack.Navigator>
  );
};

export default MainNavigator;
