import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import CustomHeader from '../components/CustomHeader';
import {mainRoutes} from '../routes/mainRoutes';
import {authRoutes} from '../routes/authRoutes';
import AuthLoadingScreen from './AuthLoadingScreen';
import NetInfo from '@react-native-community/netinfo';
import Offline from '../screens/Offline/Offline';
import {ActivityIndicator} from 'react-native-paper';

const Stack = createStackNavigator();
const MainStack = () => {
  const [isOnline, setOnline] = useState(false);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      if (state.isConnected) {
        setOnline(true);
      } else {
        setOnline(false);
      }
      setLoading(false);
    });
  }, []);

  if (isLoading) {
    // Show a loading indicator while NetInfo is in a loading state
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{animationEnabled: false}}>
        {isOnline ? (
          <>
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
          </>
        ) : (
          <Stack.Screen
            key="Offline"
            name="Offline"
            component={Offline}
            options={{
              headerShown: false,
            }}></Stack.Screen>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;

const styles = StyleSheet.create({});
