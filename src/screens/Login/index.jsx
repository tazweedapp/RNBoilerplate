import { StyleSheet, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Text from '@components/Text';
import InputText from '@components/InputText';
import { scale, verticalScale } from 'react-native-size-matters';
import Button from '@components/Button';
import { useDispatch } from 'react-redux';
import { login } from '@redux/slices/authSlice';
import PasswordInput from '@components/PasswordInput';

const Login = () => {
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login({ username: 'kminchelle', password: '0lelplR' }));
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Text>Login</Text>
        <InputText placeholder="Email" />
        <PasswordInput placeholder="Password" />
        <Button text="Login" onPress={handleLogin} />
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: scale(20),
    gap: verticalScale(20),
  },
  wrapper: {
    flex: 1,
  },
});
