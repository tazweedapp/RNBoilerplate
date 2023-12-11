import React from 'react';
import { TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';

import Text, { TEXT_ENUMS } from '@components/Text';
import { useTheme } from '@react-navigation/native';
import { scale, verticalScale } from 'react-native-size-matters';

const Button = ({
  style,
  textStyle,
  textType = TEXT_ENUMS.P1,
  text = '',
  onPress,
  disabled = false,
  loading = false,
  children,
}) => {
  const { colors } = useTheme();

  const getOpacityStyle = () => {
    return { opacity: disabled ? 0.5 : 1 };
  };
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[
        styles.container,
        style,
        getOpacityStyle(),
        { backgroundColor: colors.primary, borderColor: colors.primary },
      ]}
      onPress={onPress}
    >
      {loading && (
        <ActivityIndicator
          hidesWhenStopped={true}
          animating={loading}
          color={colors.buttonText}
          style={styles.loader}
        />
      )}
      {children}
      <Text type={textType} style={[{ color: colors.buttonText }, textStyle]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderRadius: scale(8),
    borderWidth: scale(0.5),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    maxWidth: '100%',
    paddingVertical: verticalScale(15),
    width: '100%',
  },
  loader: {
    marginRight: scale(14),
  },
});
