import React, {useEffect, useLayoutEffect} from 'react';
import {ActivityIndicator, StatusBar, StyleSheet, View} from 'react-native';
import {getAsyncData} from '../utilities/asyncStorage';
//@ts-ignore
import SplashScreen from 'react-native-splash-screen';

function AuthLoadingScreen({navigation}: any) {
  // Fetch the token from storage then navigate to our appropriate place

  useLayoutEffect(() => {
    const navigateToScreen = async () => {
      const curUser = await getAsyncData('user');

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      navigation.replace(curUser ? 'Home' : 'Signin');
    };
    navigateToScreen();
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator size="large" />
    </View>
  );
}

export default AuthLoadingScreen;
