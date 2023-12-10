import { StyleSheet } from 'react-native';
import React from 'react';

import Text, { TEXT_ENUMS } from '@components/Text';
import { hp } from '@utils/responsive';
import { useTheme } from '@react-navigation/native';
import { verticalScale } from 'react-native-size-matters';

const Label = ({ text, isRequired = false, style }) => {
  const { colors } = useTheme();

  return (
    <Text type={TEXT_ENUMS.P2} style={[styles.label, style]}>
      {text}&nbsp;
      {isRequired && <Text color={colors.error}>*</Text>}
    </Text>
  );
};

export default Label;

const styles = StyleSheet.create({
  label: {
    alignItems: 'center',
    marginBottom: verticalScale(5),
  },
});
