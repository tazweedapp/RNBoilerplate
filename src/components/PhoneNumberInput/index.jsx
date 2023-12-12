import { StyleSheet, View } from 'react-native';
import React, { useRef } from 'react';
import PhoneInput from 'react-native-phone-number-input';

import Text, { TEXT_ENUMS } from '@components/Text';
import Label from '../Label';
import { useTheme } from '@react-navigation/native';
import { scale, verticalScale } from 'react-native-size-matters';

const PhoneNumberInput = ({
  setValue = () => {},
  value = {
    isValid: false,
  },
  style,
  label,
  labelStyle,
  isRequired,
  errorMessage,
  defaultCode = 'QA',
  autoFocus = false,
}) => {
  const { colors } = useTheme();
  const phoneInput = useRef(null);
  const handleChange = (text) => {
    const isValid = phoneInput.current.isValidNumber(text);

    const newValue = {
      ...value,
      isValid,
      number: text,
    };
    setValue(newValue);
  };

  const onChangeCountry = (country) => {
    setValue({ ...value, countryCode: `+${country.callingCode[0]}` });
  };

  return (
    <View style={[styles.container, style]}>
      {label && (
        <Label text={label} style={labelStyle} isRequired={isRequired} />
      )}
      <View
        style={[
          styles.phoneInputWrapper,
          {
            borderColor: value.isValid ? colors.border : colors.error,
            backgroundColor: colors.background,
          },
        ]}
      >
        <PhoneInput
          ref={phoneInput}
          defaultValue={value.number}
          defaultCode={defaultCode}
          textInputStyle={{ color: colors.text }}
          containerStyle={styles.phoneInputContainer}
          textContainerStyle={[
            styles.textContainer,
            { backgroundColor: colors.background },
          ]}
          codeTextStyle={{ color: colors.text }}
          onChangeText={handleChange}
          onChangeCountry={onChangeCountry}
          autoFocus={autoFocus}
          layout="first"
        />
        <View style={[styles.separator, { borderLeftColor: colors.border }]} />
      </View>
      {!value.isValid ||
        (errorMessage && (
          <Text
            color={colors.error}
            type={TEXT_ENUMS.P2}
            style={styles.errorText}
          >
            {errorMessage || 'phoneNumber invalid'}
          </Text>
        ))}
    </View>
  );
};

export default PhoneNumberInput;

const styles = StyleSheet.create({
  container: {},
  errorText: {
    paddingTop: verticalScale(10),
  },
  phoneInputContainer: {
    borderRadius: scale(8),
    width: '100%',
  },
  phoneInputWrapper: {
    borderRadius: scale(8),
    borderWidth: 1,
    overflow: 'hidden',
  },
  separator: {
    borderLeftWidth: 1,
    bottom: '20%',
    left: '22.5%',
    position: 'absolute',
    top: '20%',
  },
  textContainer: {
    borderLeftWidth: 0,
  },
});
