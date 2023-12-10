import React from 'react';
import { TextInput, I18nManager, StyleSheet, View } from 'react-native';
import { scale } from 'react-native-size-matters';

import TYPOGRAPHY from '@constants/typography';
import Text, { TEXT_ENUMS } from '@components/Text';
import { useTheme } from '@react-navigation/native';

const { isRTL } = I18nManager;

const InputText = React.forwardRef(
  ({ value, style, errorMessage, containerStyle, ...props }, ref) => {
    const isDirty = !!errorMessage;

    const { colors } = useTheme();

    return (
      <View style={[styles.container, containerStyle]}>
        <View style={styles.inputWrapper}>
          <TextInput
            ref={ref}
            value={value}
            autoCapitalize="none"
            placeholderTextColor={colors.inputText}
            textAlign={isRTL ? 'right' : 'left'}
            style={[
              styles.inputStyle,
              {
                borderColor: isDirty ? colors.error : colors.border,
                backgroundColor: colors.background,
                color: colors.text,
              },
              style,
            ]}
            {...props}
          />
        </View>
        {isDirty && (
          <Text color={colors.error} type={TEXT_ENUMS.P2}>
            {errorMessage}
          </Text>
        )}
      </View>
    );
  }
);

InputText.displayName = 'InputText';

export default InputText;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  inputStyle: {
    ...TYPOGRAPHY.P2,
    borderRadius: scale(8),
    borderWidth: scale(1),
    padding: scale(15),
    width: '100%',
  },
  inputWrapper: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});
