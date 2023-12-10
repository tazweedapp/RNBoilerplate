import { StyleSheet, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import config from 'react-native-config';

import Text, { TEXT_ENUMS } from '@components/Text';
import ThemeSwitch from '@components/ThemeSwitch';
import { useTheme } from '@react-navigation/native';

const Home = () => {
  const isFrom = config.APP_CONFIG ?? '';
  const { colors } = useTheme();

  return (
    <SafeAreaView style={styles.screenContainer}>
      <View style={styles.container}>
        <ThemeSwitch />
        <View
          style={[styles.greetingContainer, { borderColor: colors.border }]}
        >
          <Text type={TEXT_ENUMS.H2} style={styles.greetingText}>
            Hello,
          </Text>
          <Text style={[styles.greetingText, styles.font]}>
            {`I am from ${isFrom}`}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: { alignItems: 'center', flex: 1, justifyContent: 'center' },
  greetingContainer: {
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
  },
  greetingText: {
    marginTop: 5,
  },
  screenContainer: {
    flex: 1,
  },
});
