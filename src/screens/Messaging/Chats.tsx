import {
  PermissionStatus,
  PermissionsAndroid,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import ChatTile from './helpers/ChatTile';
import {COLORS} from '../../constants/colors';
import {dummyChatData} from '../../data/dummyData';
import {TextInput} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import AntIcon from 'react-native-vector-icons/AntDesign';
import Contacts from 'react-native-contacts';
type ChatsType = {
  id: number;
  name: string;
  recentMessage: string;
  recentMessageCount: number;
  newMessage: boolean;
  lastMessageTime: Date;
};
const Chats = ({navigation}: any) => {
  const [searchText, setSearchText] = useState('');
  const [filteredCall, setFilteredCall] = useState<ChatsType[]>([]);

  useEffect(() => {
    const newArr = dummyChatData.filter(obj => obj.name.includes(searchText));
    setFilteredCall(newArr);
  }, [searchText]);

  const handleNewChat = () => {
    navigation.navigate('Contacts');
  };
  return (
    <ScrollView style={styles.chatContainer}>
      <View style={styles.chatHeader}>
        <Text
          style={{
            fontSize: 32,
            fontWeight: '900',
            color: '#222',
            flex: 1,
          }}>
          Chats
        </Text>
        <TouchableOpacity>
          <Icon name="camera" size={24} color={COLORS.primaryColor} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNewChat}>
          <AntIcon name="plus" style={styles.plusIcon} size={24} />
        </TouchableOpacity>
      </View>

      <TextInput
        placeholder="Search"
        value={searchText}
        onChangeText={text => setSearchText(text)}
        style={styles.searchField}></TextInput>

      {searchText
        ? filteredCall.map(obj => <ChatTile key={obj.id} {...obj} />)
        : dummyChatData.map(obj => <ChatTile key={obj.id} {...obj} />)}
    </ScrollView>
  );
};

export default Chats;

const styles = StyleSheet.create({
  chatContainer: {
    backgroundColor: COLORS.backgroundColor,
  },
  searchField: {
    backgroundColor: COLORS.white,
    marginHorizontal: 16,
    borderRadius: 8,
    marginVertical: 12,
    paddingHorizontal: 12,
  },
  chatHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    marginHorizontal: 16,
    marginTop: 12,
  },
  plusIcon: {
    color: COLORS.primaryColor,
    padding: 4,
  },
});
