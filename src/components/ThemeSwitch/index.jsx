import COLORS from '@constants/colors';
import { useTheme } from '@react-navigation/native';
import { setTheme } from '@redux/slices/authSlice';
import React from 'react';
import { View, Switch, Text, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';

const ThemeSwitch = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const colors = theme.colors;

  const toggleSwitch = () => {
    dispatch(setTheme(theme.dark ? 'light' : 'dark'));
  };

  return (
    <View style={styles.wrapper}>
      <Text style={{ color: colors.primary }}>{theme.dark ? '🌛' : '🌞'}</Text>
      <Switch
        trackColor={{ false: colors.border, true: colors.border }}
        thumbColor={colors.primary}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={theme.dark}
      />
    </View>
  );
};

export default ThemeSwitch;

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
