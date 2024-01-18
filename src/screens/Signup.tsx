import {Button, Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {globalStyles} from '../styles/GlobalStyles';
import {TextInput} from 'react-native-gesture-handler';
import CustomButton from '../components/CustomButton';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {FIREBASE_AUTH} from '../config/firebaseConfig';
import {COLORS} from '../constants/colors';
import {Formik} from 'formik';

import * as yup from 'yup';
import {Snackbar} from 'react-native-paper';

// @ts-ignore
import {KeyboardAwareView} from 'react-native-keyboard-aware-view';

const plant = require('../assets/images/sapling.png');
const signupValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email Address is Required'),
  password: yup
    .string()
    .min(8, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required'),
});

const Signup = ({navigation}: any) => {
  const [snackbarVisible, setSnackbarVisible] = useState({
    visible: false,
    message: '',
  });
  const [isLoading, setLoading] = useState(false);
  const handleSignUp = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(
        FIREBASE_AUTH,
        email,
        password,
      );
      setSnackbarVisible({
        visible: true,
        message: 'Sucessfully registered!, Redirecting...',
      });
      setLoading(false);
      navigation.navigate('Signin');
      console.log(response);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleSnackbarDismiss = () => {
    setSnackbarVisible({visible: false, message: ''});
  };
  return (
    <KeyboardAwareView
      style={styles.signupContainer}
      animated={true}
      keyboardShouldPersistTaps={'always'}
      showsVerticalScrollIndicator={false}
      useNativeDriver={true}>
      <Image source={plant} resizeMode="cover" style={{flex: 1, width: 400}} />
      <Text
        style={{
          fontSize: 36,
          fontWeight: '700',
          color: COLORS.primaryColor,
        }}>
        Welcome to Prithvi!
      </Text>
      <Text style={[globalStyles.lightText, {marginBottom: 24}]}>
        Register and Begin your Green journey
      </Text>
      <Formik
        validationSchema={signupValidationSchema}
        initialValues={{email: '', password: ''}}
        onSubmit={values => handleSignUp(values)}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          isValid,
        }) => (
          <>
            <TextInput
              placeholder="Email Address"
              style={styles.textInput}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              keyboardType="email-address"
            />
            {errors.email && (
              <Text style={{fontSize: 10, color: 'red'}}>{errors.email}</Text>
            )}
            <TextInput
              placeholder="Password"
              style={styles.textInput}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              secureTextEntry
            />
            {errors.password && (
              <Text style={{fontSize: 10, color: 'red'}}>
                {errors.password}
              </Text>
            )}

            <Text style={{marginLeft: 8, marginVertical: 8, fontSize: 12}}>
              Already a part of Green Journey?{' '}
              <Text
                onPress={() => navigation.navigate('Signin')}
                style={[globalStyles.anchorText]}>
                {' '}
                Login Here{' '}
              </Text>
            </Text>
            <CustomButton
              dark={true}
              onPress={handleSubmit}
              btnText="Submit"
              disabled={!isValid}
              loading={isLoading}
            />
          </>
        )}
      </Formik>

      <Snackbar
        visible={snackbarVisible.visible}
        onDismiss={handleSnackbarDismiss}>
        {snackbarVisible.message}
      </Snackbar>
    </KeyboardAwareView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  signupContainer: {
    flex: 1,
    backgroundColor: COLORS.secondaryColor,
    marginHorizontal: 8,
  },

  textInput: {
    height: 60,
    marginTop: 12,
    backgroundColor: 'white',
    paddingHorizontal: 16,
    borderColor: 'gray',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 24,
  },
});
