import { StyleSheet, View } from 'react-native';
import React, { useRef } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import config from 'react-native-config';

import Text, { TEXT_ENUMS } from '@components/Text';
import ThemeSwitch from '@components/ThemeSwitch';
import { useTheme } from '@react-navigation/native';
import Button from '@components/Button';
import { useDispatch } from 'react-redux';
import { resetAuth } from '@redux/slices/authSlice';
import { verticalScale } from 'react-native-size-matters';
import HomeModal from './HomeModal';

const Home = () => {
  const dispatch = useDispatch();
  const modalRef = useRef(null);
  const isFrom = config.APP_CONFIG || '';
  const { colors } = useTheme();

  const handleLogout = () => {
    dispatch(resetAuth());
  };

  const handleModalOpen = () => {
    modalRef.current.present();
  };

  return (
    <SafeAreaView style={styles.screenContainer}>
      <View style={styles.container}>
        <ThemeSwitch />
        <View
          style={[styles.greetingContainer, { borderColor: colors.border }]}
        >
          <Text type={TEXT_ENUMS.P1} style={styles.greetingText}>
            Hello,
          </Text>
          <Text style={[styles.greetingText, styles.font]}>
            {`I am from ${isFrom}`}
          </Text>
        </View>
        <Button text="Open Modal" onPress={handleModalOpen} />
        <Button text="Logout" onPress={handleLogout} />
      </View>
      <HomeModal ref={modalRef} />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    gap: verticalScale(20),
  },
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
