import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import 'react-native-gesture-handler';

import {AuthProvider} from './src/context/AuthProvider';

import store from './src/redux/store';
import Navigation from './src/navigation/Navigation';
import {useCameraPermission} from 'react-native-vision-camera';
import SplashScreen from 'react-native-splash-screen';
import messaging from '@react-native-firebase/messaging';
import {Alert} from 'react-native';

function App() {
  const {hasPermission, requestPermission} = useCameraPermission();

  useEffect(() => {
    if (!hasPermission) {
      requestPermission();
    }
    // requestUserPermission();
    getDeviceToken();
    SplashScreen.hide();
  }, []);

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []);

  const getDeviceToken = async () => {
    let token = await messaging().getToken();
    console.log(token);
  };

  return (
    <AuthProvider>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </AuthProvider>
  );
}

export default App;
