import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '@screens/Home';
import ROUTES from '@constants/routes';
import Products from '@screens/Products';
import { useTheme } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  const { colors } = useTheme();

  return (
    <Tab.Navigator
      initialRouteName={ROUTES.HOME}
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.text,
        tabBarStyle: {
          backgroundColor: colors.background,
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name={ROUTES.HOME} component={Home} />
      <Tab.Screen name={ROUTES.PRODUCTS} component={Products} />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
