import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import CustomHeader from '../components/CustomHeader';
import {mainRoutes} from '../routes/mainRoutes';
import {authRoutes} from '../routes/authRoutes';
import AuthLoadingScreen from './AuthLoadingScreen';

const Stack = createStackNavigator();
const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          key="Auth"
          name="Auth"
          component={AuthLoadingScreen}
          options={{
            headerShown: false,
          }}></Stack.Screen>
        {authRoutes.map(obj => (
          <Stack.Screen
            {...obj}
            key={obj.name}
            options={{
              headerShown: obj.headerShown,

              header: () => <CustomHeader title={obj.name} />,
            }}></Stack.Screen>
        ))}
        {mainRoutes.map(obj => (
          <Stack.Screen
            {...obj}
            key={obj.name}
            options={{
              headerShown: obj.headerShown,
              header: () => <CustomHeader title={obj.name} />,
            }}></Stack.Screen>
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;

const styles = StyleSheet.create({});
