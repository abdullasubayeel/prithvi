import React, {useEffect, useLayoutEffect, useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {BottomSheet} from '@rneui/themed';
import Icon from 'react-native-vector-icons/FontAwesome';
import FeatureTile from '../../components/FeatureTile';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomButton from '../../components/CustomButton';
import {useDispatch} from 'react-redux';

import {login} from '../../redux/slices/authSlice';
import {globalStyles} from '../../styles/GlobalStyles';
import auth from '@react-native-firebase/auth';
import {FIREBASE_AUTH} from '../../config/firebaseConfig';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {Formik} from 'formik';

import * as yup from 'yup';
import {storeAsyncData} from '../../utilities/asyncStorage';

const earth = require('../../assets/images/earth.png');

const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email Address is Required'),
  password: yup
    .string()
    .min(8, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required'),
});

const Signin = ({navigation}: any) => {
  const [isVisible, setIsVisible] = useState(false);
  const [loginToggle, setLoginToggle] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState('');

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user: any) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  const dispatch = useDispatch();
  const firebaseAuth = FIREBASE_AUTH;
  const BSData = [
    {
      id: '0',
      icon: 'key',
      title: 'Fast and Easy',
      desc: 'Signin to apps and websites with your Apple ID',
    },
    {
      id: '1',
      icon: 'privacy-tip',
      title: 'Respects Your Privacy',
      desc: 'Apple will not track you, it will onlyask for mail and password.',
    },
    {
      id: '2',
      icon: 'mail',
      title: 'Hide your Email',
      desc: 'Keep your email address private, but still recieve message form the app.',
    },
  ];

  const handleLogin = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    console.log('calling');
    try {
      setLoading(true);
      const response = await signInWithEmailAndPassword(
        firebaseAuth,
        email,
        password,
      );
      dispatch(login({email, accessToken: '123'}));
      storeAsyncData('user', JSON.stringify(response.user));
      console.log(response);
      setLoading(false);
      navigation.navigate('Home');
    } catch (error) {
      setLoginError('Something went Wrong');
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.bg}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Welcome to Prithvi</Text>

          <Text style={styles.tagLine}>The Genesis of Everything.</Text>
        </View>

        <View style={styles.ellipse}>
          <Image style={styles.earthImg} source={earth} />
        </View>

        <View style={styles.btnContainer}>
          <CustomButton
            btnText="Continue"
            dark={false}
            onPress={() => {
              setLoginToggle(false);
              setIsVisible(true);
            }}
            loading={false}
            disabled={false}
          />
          <CustomButton
            btnText="Join the Community"
            dark={true}
            onPress={() => navigation.navigate('Signup')}
            loading={false}
            disabled={false}
          />

          <Text
            onPress={() => {
              setLoginToggle(true);
              setIsVisible(true);
            }}
            style={styles.signUpText}>
            Already a Member?
          </Text>
        </View>
        <BottomSheet
          modalProps={{
            style: {
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            },
          }}
          isVisible={isVisible}>
          <SafeAreaView style={{flex: 1}}>
            {loginToggle ? (
              <View style={styles.bsContainer}>
                <View style={styles.bsHeader}>
                  <Text style={styles.boldText}>Login</Text>
                  <Icon
                    name="close"
                    size={20}
                    style={styles.closeIcon}
                    onPress={() => setIsVisible(false)}
                    color="#aaa"
                  />
                </View>
                <Formik
                  validationSchema={loginValidationSchema}
                  initialValues={{email: '', password: ''}}
                  onSubmit={values => handleLogin(values)}>
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
                          placeholder="Email Address"
                          style={styles.textInput}
                          onChangeText={handleChange('email')}
                          onBlur={handleBlur('email')}
                          value={values.email}
                          keyboardType="email-address"
                        />
                        {errors.email && (
                          <Text style={{fontSize: 10, color: 'red'}}>
                            {errors.email}
                          </Text>
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

                        <Text style={{marginVertical: 8}}>
                          New Here?{' '}
                          <Text
                            onPress={() => navigation.navigate('Signup')}
                            style={[globalStyles.anchorText]}>
                            {' '}
                            Sign Up{' '}
                          </Text>
                        </Text>
                        <Text style={{color: 'red'}}>{loginError}</Text>

                        <CustomButton
                          dark={true}
                          onPress={() => handleSubmit()}
                          btnText="Submit"
                          disabled={!isValid}
                          loading={loading}
                        />
                      </>
                    );
                  }}
                </Formik>
              </View>
            ) : (
              <View style={styles.bsContainer}>
                <View style={styles.bsHeader}>
                  <Text style={styles.boldText}>Apple</Text>
                  <Icon
                    name="close"
                    size={20}
                    style={styles.closeIcon}
                    onPress={() => setIsVisible(false)}
                    color="#aaa"
                  />
                </View>
                <Text style={styles.heading}>Sign in with Apple </Text>

                {BSData.map(obj => (
                  <FeatureTile key={obj.id} {...obj} />
                ))}
                <Text style={styles.bottomContent}>
                  In setting up sign in with Apple information about your Apple
                  ID and device use patterns may be used by APple to help
                  prevent fraud.
                  <Text style={styles.anchorText}>
                    See how your data is managed.
                  </Text>
                </Text>
                <CustomButton
                  dark={true}
                  onPress={() => setLoginToggle(true)}
                  btnText="Proceed"
                  disabled={false}
                  loading={false}
                />
              </View>
            )}
          </SafeAreaView>
        </BottomSheet>
      </View>
    </SafeAreaView>
  );
};

export default Signin;

const styles = StyleSheet.create({
  bg: {
    backgroundColor: '#EAECCC',
    flex: 1,
    gap: 24,

    alignItems: 'center',
    justifyContent: 'center',
  },

  textContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },

  title: {
    textAlign: 'center',
    fontSize: 24,
    color: '#22630e',
    fontWeight: '700',
  },
  tagLine: {
    textAlign: 'center',
    fontSize: 36,
    color: '#1d1d1d',
    marginHorizontal: 8,
    fontWeight: '700',
  },
  ellipse: {
    flex: 2,
    height: '45%',
    width: '90%',
    borderRadius: 300,
    backgroundColor: '#313131',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  earthImg: {
    height: 300,
    width: 300,

    resizeMode: 'contain',
  },
  whiteFont: {
    color: '#fff',
  },
  boldText: {
    fontWeight: '700',
    color: '#222',
    fontSize: 16,
  },
  btnContainer: {
    gap: 12,

    width: '100%',
    paddingHorizontal: 8,
    marginBottom: 8,
  },
  darkBtn: {
    backgroundColor: '#222222',
    paddingHorizontal: 32,
    paddingVertical: 24,
    fontWeight: '600',
    width: 300,
    color: '#fff',
    borderRadius: 24,
    alignSelf: 'center',
    alignItems: 'center',
  },
  lightBtn: {
    backgroundColor: '#fff',
    paddingHorizontal: 32,
    paddingVertical: 24,
    fontWeight: '600',
    borderRadius: 24,
    width: 300,

    alignItems: 'center',
    alignSelf: 'center',
  },
  signUpText: {
    fontWeight: '400',
    color: '#222',
    alignItems: 'center',
    textAlign: 'center',
    letterSpacing: 3,
    marginVertical: 8,
  },
  contentContainer: {
    padding: 8,
    flex: 1,
    alignItems: 'center',
  },
  bsContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  closeIcon: {
    backgroundColor: '#eee',

    borderRadius: 24,

    padding: 4,
  },
  bsHeader: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  heading: {
    textAlign: 'center',
    fontSize: 20,
    color: '#222',
    fontWeight: '800',
    marginVertical: 12,
  },
  anchorText: {
    color: 'blue',
  },
  bottomContent: {
    marginHorizontal: 24,
    textAlign: 'center',
    marginVertical: 24,
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
