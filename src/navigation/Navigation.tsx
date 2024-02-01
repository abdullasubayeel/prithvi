import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import AuthStack from './AuthStack';
import MainStack from './MainStack';
import {getAsyncData} from '../utilities/asyncStorage';
import {
  StackNavigationProp,
  createStackNavigator,
} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';

const Navigation = () => {
  // const auth = useSelector((state: RootState) => state.auth);
  // const [isLoggedIn, setLoggedIn] = useState(false);

  // const getUser = async () => {
  //   const curUser = await getAsyncData('user');
  //   if (curUser) {
  //     setLoggedIn(true);
  //   } else {
  //     setLoggedIn(false);
  //   }
  // };

  // getUser();
  return <MainStack />;
};

export default Navigation;

const styles = StyleSheet.create({});
