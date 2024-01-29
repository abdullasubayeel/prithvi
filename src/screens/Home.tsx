import {
  FlatList,
  NativeModules,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useLayoutEffect} from 'react';
import HomeCard from '../components/HomeCard';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomButton from '../components/CustomButton';
import {HOME_DATA} from '../constants/HomeData';
import Config from 'react-native-config';
import notifee from '@notifee/react-native';

const Home = ({navigation}: any) => {
  const apiBaseUrl = Config.API_BASE_URL;
  const apiKey = Config.API_KEY;

  async function onDisplayNotification() {
    try {
      // Request permissions (required for iOS)
      await notifee.requestPermission();

      // Create a channel (required for Android)
      const channelId = await notifee.createChannel({
        id: 'default',
        name: 'Default Channel',
      });
      console.log('cid', channelId);
      // Display a notification
      await notifee.displayNotification({
        title: 'Notification Title',
        body: 'Main body content of the notification',

        android: {
          channelId,

          pressAction: {
            id: 'mark-as-read',
          },
        },
      });
    } catch (err: any) {
      console.log(err);
    }
  }
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.homeContainer}>
        <View style={styles.cardContainer}>
          <FlatList
            data={HOME_DATA}
            numColumns={2}
            renderItem={({item}) => <HomeCard {...item} />}
            keyExtractor={item => item.id}></FlatList>
        </View>

        <CustomButton
          btnText="Continue"
          dark={true}
          onPress={() => onDisplayNotification()}
          loading={false}
          disabled={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  homeContainer: {
    paddingHorizontal: 8,
    flex: 1,
    backgroundColor: '#F5F5FA',
  },
  cardContainer: {
    // flexWrap: 'wrap',
    // flex: 2,
    marginTop: 8,
    flex: 3,
    gap: 12,
  },
  heading: {
    textAlign: 'center',
    fontSize: 24,
    color: '#222',
    fontWeight: '800',
    marginVertical: 12,
  },
  text: {
    textAlign: 'center',
    fontSize: 14,
    color: '#666',
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
});
