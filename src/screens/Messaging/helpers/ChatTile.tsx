import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {globalStyles} from '../../../styles/GlobalStyles';
import React from 'react';
import {formatDateTime} from '../../../utilities/date';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export type RootStackParamList = {
  'Chat Screen': {chatId: number} | undefined;
};

const dummyImg = require('../../../assets/images/earth.png');
const ChatTile = ({
  id,
  name,
  recentMessage,
  recentMessageCount,
  newMessage,
  lastMessageTime,
}: any) => {
  const formattedDate = formatDateTime(lastMessageTime);
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  return (
    <TouchableOpacity
      style={styles.chatTileContainer}
      onPress={() => navigation.navigate('Chat Screen', {chatId: id})}>
      <Image
        style={{flex: 1, borderRadius: 24, height: 56, width: 56}}
        source={dummyImg}
        resizeMode="contain"
      />
      <View style={styles.chatText}>
        <Text style={globalStyles.titleText}>{name}</Text>
        <Text style={globalStyles.lightText}>{recentMessage}</Text>
      </View>
      <View style={styles.recentNotification}>
        {newMessage ? (
          <>
            <Text
              style={{
                color: 'green',
              }}>
              {formattedDate}
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
          <Text style={{color: 'grey'}}>{formattedDate}</Text>
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
