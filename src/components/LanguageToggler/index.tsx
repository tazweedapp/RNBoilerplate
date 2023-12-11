import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';

import Text, { TEXT_ENUMS } from '@components/Text';
import useToggleLanguage from '@hooks/useToggleLanguage';
import { useTheme } from '@react-navigation/native';
import { scale } from 'react-native-size-matters';

const LanguageToggler = ({ style }) => {
  const { toggleLang } = useToggleLanguage();
  const { i18n } = useTranslation();

  const isEn = i18n.language === 'en';
  const { colors } = useTheme();
  return (
    <TouchableOpacity
      onPress={toggleLang}
      style={[styles.container, { backgroundColor: colors.background }, style]}
    >
      <View
        style={[
          styles.selectedText,
          {
            backgroundColor: isEn ? colors.primary : colors.background,
            borderColor: colors.border,
          },
        ]}
      >
        <Text
          type={TEXT_ENUMS.P2}
          color={isEn ? colors.background : colors.text}
          style={styles.text}
        >
          En
        </Text>
      </View>
      <View
        style={[
          styles.selectedText,
          { backgroundColor: !isEn ? colors.primary : colors.background },
        ]}
      >
        <Text
          type={TEXT_ENUMS.P2}
          color={!isEn ? colors.background : colors.text}
          style={styles.text}
        >
          ع
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default LanguageToggler;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignSelf: 'flex-start',
    borderRadius: scale(50),
    borderWidth: scale(0.5),
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: scale(5),
    zIndex: 1,
  },
  selectedText: {
    borderRadius: scale(50),
  },
  text: {
    padding: scale(5),
    textAlign: 'center',
    width: scale(40),
    zIndex: -1,
  },
});
