import {Button, Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {globalStyles} from '../../styles/GlobalStyles';
import {TextInput} from 'react-native-gesture-handler';
import CustomButton from '../../components/CustomButton';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {FIREBASE_AUTH} from '../../config/firebaseConfig';
import {COLORS} from '../../constants/colors';
import {Formik} from 'formik';

import * as yup from 'yup';
import {Snackbar} from 'react-native-paper';

// @ts-ignore
import {KeyboardAwareView} from 'react-native-keyboard-aware-view';

import firestore from '@react-native-firebase/firestore';
import uuid from 'react-native-uuid';

const plant = require('../../assets/images/sapling.png');

const initialSignUpValues = {
  fullName: '',
  phoneNumber: '',
  email: '',
  password: '',
  confirmPassword: '',
};
const signupValidationSchema = yup.object().shape({
  fullName: yup.string().required('Name is Required'),
  phone: yup.number().max(8, ({max}) => `Phone number must be of 10 digits`),
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email Address is Required'),
  password: yup

    .string()
    .min(8, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .min(8, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required')
    .oneOf([yup.ref('password'), ''], 'Passwords must match'),
});

const Signup = ({navigation}: any) => {
  const [snackbarVisible, setSnackbarVisible] = useState({
    visible: false,
    message: '',
  });
  const [isLoading, setLoading] = useState(false);
  const handleSignUp = async ({
    fullName,
    phoneNumber,
    email,
    password,
    confirmPassword,
  }: {
    fullName: string;
    phoneNumber: string;
    email: string;
    password: string;
    confirmPassword: string;
  }) => {
    setLoading(true);
    const userId = uuid.v4().toString();
    try {
      const existingUser = await firestore()
        .collection('users')
        .where('email', '==', email)
        .get();

      if (existingUser.size !== 0) {
        setLoading(false);

        return;
      }
      const storeUser = firestore()
        .collection('users')
        .doc(userId)
        .set({
          userId: userId,
          fullName,
          phoneNumber,
          email,
          password,
        })
        .then(async (response: any) => {
          console.log('User Created');
          const authResponse = await createUserWithEmailAndPassword(
            FIREBASE_AUTH,
            email,
            password,
          );

          navigation.navigate('Signin');
        })
        .catch((err: any) => {
          console.log('Error', err);
        });

      console.log('store', storeUser);
      setSnackbarVisible({
        visible: true,
        message: 'Sucessfully registered!, Redirecting...',
      });
      setLoading(false);
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
        initialValues={initialSignUpValues}
        onSubmit={values => handleSignUp(values)}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          isValid,
        }) => {
          return (
            <>
              <TextInput
                placeholder="Full Name"
                style={styles.textInput}
                onChangeText={handleChange('fullName')}
                onBlur={handleBlur('fullName')}
                value={values.fullName}
                keyboardType="default"
              />
              {errors.fullName && (
                <Text style={{fontSize: 10, color: 'red'}}>
                  {errors.fullName}
                </Text>
              )}
              <TextInput
                placeholder="Phone Number"
                style={styles.textInput}
                onChangeText={handleChange('phoneNumber')}
                onBlur={handleBlur('phoneNumber')}
                value={values.phoneNumber}
                keyboardType="number-pad"
              />
              {errors.phoneNumber && (
                <Text style={{fontSize: 10, color: 'red'}}>
                  {errors.phoneNumber}
                </Text>
              )}
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
              <TextInput
                placeholder="Confirm Password"
                style={styles.textInput}
                onChangeText={handleChange('confirmPassword')}
                onBlur={handleBlur('confirmPassword')}
                value={values.confirmPassword}
                secureTextEntry
              />
              {errors.confirmPassword && (
                <Text style={{fontSize: 10, color: 'red'}}>
                  {errors.confirmPassword}
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
          );
        }}
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
