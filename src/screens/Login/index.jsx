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
import { Formik } from 'formik';
import * as yup from 'yup';

const loginScheme = () => {
  return yup.object().shape({
    email: yup.string().email('invalid_email').required('email required'),
    password: yup
      .string()
      .min(8, 'password too short')
      .required('Password required'),
  });
};

const Login = () => {
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login({ username: 'kminchelle', password: '0lelplR' }));
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Text>Login</Text>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={loginScheme}
          onSubmit={handleLogin}
          validateOnMount
          validateOnChange
        >
          {({ handleSubmit, setFieldValue, values, errors }) => (
            <View style={styles.form}>
              <InputText
                placeholder="Email"
                value={values.email}
                onChangeText={(value) => setFieldValue('email', value)}
              />
              <PasswordInput
                placeholder="Password"
                value={values.password}
                setValue={(value) => setFieldValue('password', value)}
              />
              <Button text="Login" onPress={handleSubmit} />
            </View>
          )}
        </Formik>
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
  form: {
    gap: verticalScale(20),
    width: '100%',
  },
  wrapper: {
    flex: 1,
  },
});
