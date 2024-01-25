import React, {useEffect, useState} from 'react';
import {Alert, Platform} from 'react-native';
import {Provider} from 'react-redux';
import NetInfo from '@react-native-community/netinfo';

import 'react-native-gesture-handler';

import {AuthProvider} from './src/context/AuthProvider';

import store from './src/redux/store';
import Navigation from './src/navigation/Navigation';
import {useCameraPermission} from 'react-native-vision-camera';
import SplashScreen from 'react-native-splash-screen';
function App() {
  const {hasPermission, requestPermission} = useCameraPermission();

  useEffect(() => {
    if (!hasPermission) {
      requestPermission();
    }

    SplashScreen.hide();
  }, []);

  return (
    <AuthProvider>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </AuthProvider>
  );
}

export default App;
