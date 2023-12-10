import React, { useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  I18nManager,
  TouchableOpacity,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-remix-icon';

import Typography from '@constants/typography';
import Text, { TEXT_ENUMS } from '@components/Text';
import Label from '@components/Label';
import { useTheme } from '@react-navigation/native';
import { moderateScale, scale } from 'react-native-size-matters';

const isRTL = I18nManager.isRTL;

const PasswordInput = ({
  value,
  setValue,
  errorMessage,
  textInputRef,
  containerStyle,
  label,
  isRequired,
  labelStyle,
}) => {
  const { colors } = useTheme();

  const isDirty = !!errorMessage;
  const { t } = useTranslation();
  const [isSecure, setIsSecure] = useState(true);
  return (
    <View style={[styles.wrapper, containerStyle]}>
      <View>
        {label && (
          <Label text={label} isRequired={isRequired} style={labelStyle} />
        )}
        <View>
          <TextInput
            ref={textInputRef}
            color={colors.text}
            width="100%"
            borderWidth={scale(1)}
            paddingLeft={scale(18)}
            autoCapitalize="none"
            paddingRight={scale(18)}
            onChangeText={setValue}
            placeholderTextColor={colors.inputText}
            secureTextEntry={isSecure}
            value={value}
            textAlign={isRTL ? 'right' : 'left'}
            placeholder={t('password')}
            borderColor={colors.border}
            style={[styles.textStyle, { backgroundColor: colors.background }]}
          />
          <TouchableOpacity
            style={styles.icon}
            onPress={() => setIsSecure((prev) => !prev)}
          >
            <Icon
              name={isSecure ? 'ri-eye-line' : 'ri-eye-off-line'}
              size={scale(20)}
              color={colors.primary}
            />
          </TouchableOpacity>
        </View>
      </View>
      {isDirty && (
        <Text color={colors.error} type={TEXT_ENUMS.P2}>
          {errorMessage}
        </Text>
      )}
    </View>
  );
};

export default PasswordInput;

const styles = StyleSheet.create({
  icon: {
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
    paddingHorizontal: scale(15),
    position: 'absolute',
    right: 0,
  },
  textStyle: {
    ...Typography.P2,
    borderRadius: moderateScale(8),
    padding: moderateScale(15),
  },
  wrapper: {
    width: '100%',
  },
});
