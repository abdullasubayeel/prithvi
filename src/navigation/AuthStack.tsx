import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {authRoutes} from '../routes/authRoutes';
import CustomHeader from '../components/CustomHeader';

const Stack = createStackNavigator();
const AuthStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {authRoutes.map(obj => (
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

export default AuthStack;

const styles = StyleSheet.create({});
