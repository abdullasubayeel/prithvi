import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Chats from './Chats';
import Calls from './Calls';
import {COLORS} from '../../constants/colors';
import StatusScreen from './helpers/StatusScreen';

const Tab = createMaterialTopTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: true,
        tabBarActiveTintColor: COLORS.primaryColor,
        tabBarIndicatorStyle: {
          backgroundColor: COLORS.primaryColor,
        },
        tabBarStyle: {
          backgroundColor: COLORS.backgroundColor,
        },
      })}>
      <Tab.Screen name="Chats" component={Chats} />
      <Tab.Screen name="Status" component={StatusScreen} />
      <Tab.Screen name="Calls" component={Calls} />
    </Tab.Navigator>
  );
};

export default Tabs;

const styles = StyleSheet.create({});
