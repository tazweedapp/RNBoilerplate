import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import config from 'react-native-config';

const Home = () => {
  const isFrom = config.APP_CONFIG ?? '';

  return (
    <SafeAreaView style={styles.screenContainer}>
      <View style={styles.container}>
        <View style={styles.greetingContainer}>
          <Text style={[styles.greetingText, styles.font]}>Hi Sathish K,</Text>
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
  font: {
    fontWeight: '700',
  },
  greetingContainer: {
    alignItems: 'center',
    borderColor: 'red',
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
  },
  greetingText: {
    color: 'red',
    marginTop: 5,
  },
  screenContainer: {
    flex: 1,
  },
});
