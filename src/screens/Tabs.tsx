import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Chats from './Messaging/Chats';
import Status from './Messaging/Status';
import Calls from './Messaging/Calls';
import {COLORS} from '../constants/colors';

const Tab = createMaterialTopTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: true,
        tabBarActiveTintColor: '#fff',

        tabBarStyle: {
          backgroundColor: COLORS.primaryColor,
        },
      })}>
      <Tab.Screen name="Chats" component={Chats} />
      <Tab.Screen name="Status" component={Status} />
      <Tab.Screen name="Calls" component={Calls} />
    </Tab.Navigator>
  );
};

export default Tabs;

const styles = StyleSheet.create({});
