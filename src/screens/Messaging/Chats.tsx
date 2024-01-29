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
import FAIcon from 'react-native-vector-icons/FontAwesome';
import AntIcon from 'react-native-vector-icons/AntDesign';

import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import firestore from '@react-native-firebase/firestore';

type ChatsType = {
  userId: number;
  name: string;
  recentMessage: string;
  recentMessageCount: number;
  newMessage: boolean;
  lastMessageTime: Date;
};

type userType = {
  email: string;
  fullName: string;
  password: string;
  phoneNumber: string;
  userId: string;
};
const Chats = ({navigation}: any) => {
  const [searchText, setSearchText] = useState('');
  const [users, setUsers] = useState<userType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [filteredCall, setFilteredCall] = useState<ChatsType[]>([]);

  useEffect(() => {
    const newArr = dummyChatData.filter(obj => obj.name.includes(searchText));
    setFilteredCall(newArr);
  }, [searchText]);

  const handleNewChat = () => {
    navigation.navigate('Contacts');
  };

  const options = {
    mediaType: 'photo',
    cameraType: 'back',
    durationLimit: 5,
    saveToPhotos: true,
  };
  const openCamera = () => {
    //@ts-ignore
    launchCamera(options);
  };

  const openGallery = async () => {
    //@ts-ignore
    const result = await launchImageLibrary(options);
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    const existingUser = await firestore().collection('users').get();
    const usersData: userType[] = existingUser.docs.map(
      doc => doc.data() as userType,
    );
    setUsers(usersData);
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
        <TouchableOpacity onPress={openGallery}>
          <FAIcon name="picture-o" size={24} color={COLORS.primaryColor} />
        </TouchableOpacity>
        <TouchableOpacity onPress={openCamera}>
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
        ? filteredCall.map(obj => <ChatTile key={obj.userId} {...obj} />)
        : dummyChatData.map(obj => <ChatTile key={obj.userId} {...obj} />)}

      {users.map(obj => (
        <TouchableOpacity>
          <Text>{obj.email}</Text>
        </TouchableOpacity>
      ))}
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
