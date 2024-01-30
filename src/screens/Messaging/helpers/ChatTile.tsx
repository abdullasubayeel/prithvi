import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {globalStyles} from '../../../styles/GlobalStyles';
import React, {useEffect, useState} from 'react';
import {formatDateTime} from '../../../utilities/date';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {getAsyncData} from '../../../utilities/asyncStorage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ChatsType, UserData} from '../../../enums/ChatTypes';

export type RootStackParamList = {
  'Chat Screen': {chatId: string; myId: string} | undefined;
};

const dummyImg = require('../../../assets/images/earth.png');
const ChatTile = ({
  userId,
  fullName,
  recentMessage,
  recentMessageCount,
  newMessage,
  lastMessageTime,
}: any) => {
  // const formattedDate = formatDateTime(lastMessageTime);
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [myId, setMyId] = useState<UserData>();

  const getId = async () => {
    const myData = await getAsyncData('user');

    //@ts-ignore
    setMyId(JSON.parse(myData));
  };

  useEffect(() => {
    getId();
  }, []);

  return (
    <TouchableOpacity
      style={styles.chatTileContainer}
      onPress={() =>
        navigation.navigate('Chat Screen', {
          chatId: userId,
          myId: myId?.userId ?? '',
        })
      }>
      <Image
        style={{flex: 1, borderRadius: 24, height: 56, width: 56}}
        source={dummyImg}
        resizeMode="contain"
      />
      <View style={styles.chatText}>
        <Text style={globalStyles.titleText}>{fullName}</Text>
        <Text style={globalStyles.lightText}>{recentMessage}</Text>
      </View>
      <View style={styles.recentNotification}>
        {newMessage ? (
          <>
            <Text
              style={{
                color: 'green',
              }}>
              {/* {formattedDate} */} Date
            </Text>
            <Text
              style={{
                color: 'white',
                backgroundColor: 'green',
                // padding: 4,
                borderRadius: 12,
                height: 24,
                width: 24,
                alignItems: 'center',
                justifyContent: 'center',
                alignSelf: 'center',
                textAlign: 'center',
              }}>
              {recentMessageCount}
            </Text>
          </>
        ) : (
          <Text style={{color: 'grey'}}>Date</Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default ChatTile;

const styles = StyleSheet.create({
  chatTileContainer: {
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    padding: 8,
    gap: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  chatText: {
    gap: 8,
    flex: 3,
  },
  recentNotification: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 4,
  },
});
