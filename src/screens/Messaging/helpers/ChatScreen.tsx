import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Linking,
} from 'react-native';
import React, {memo, useCallback, useEffect, useRef, useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6';
import * as EntypoIcon from 'react-native-vector-icons/Entypo';
import {globalStyles} from '../../../styles/GlobalStyles';
import {COLORS} from '../../../constants/colors';
import {useNavigation} from '@react-navigation/native';

import IoniIcon from 'react-native-vector-icons/Ionicons';
import {FlatList} from 'react-native-gesture-handler';
import WavingImage from '../../../components/WavingHand';

import moment from 'moment';
import {GiftedChat} from 'react-native-gifted-chat';

import firestore from '@react-native-firebase/firestore';
import {UserData} from '../../../enums/ChatTypes';

const dummyImg = require('../../../assets/images/earth.png');
const noChats = require('../../../assets/images/no-chats.png');
const palm = require('../../../assets/images/hand.png');

type messageType = {
  sentBy: string;
  sentTo: string;
  messages: string;
  createdAt: string;
  status: string;
};

type chatsByDateType = {
  [key: string]: messageType[];
};
const ChatScreen = ({route}: any) => {
  const {chatId, myId} = route.params;

  const [message, setMessage] = useState('');
  const [userData, setUserData] = useState<UserData>();
  const [chats, setChats] = useState<Array<{text: string; sender: string}>>([]);
  const [chatsByDate, setChatsByDate] = useState<chatsByDateType>({});

  const navigation = useNavigation();

  const scrollViewRef = useRef(null);

  const getUserData = async () => {
    const myData = await firestore()
      .collection('users')
      .where('userId', '==', chatId)
      .get();
    //@ts-ignore
    setUserData(myData.docs[0]._data);
  };

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      // setChats([...chats, {text: message, sender: 'user'}]);
      let newMessage = {
        sentBy: myId,
        sentTo: chatId,
        messages: message,
        createdAt: new Date().toISOString(),
        status: 'MESSAGE',
      };

      firestore()
        .collection('chats')
        .doc(myId + chatId)
        .collection('messages')
        .add(newMessage);
      firestore()
        .collection('chats')
        .doc(chatId + myId)
        .collection('messages')
        .add(newMessage);

      appendAndTransformChats(newMessage);

      setMessage('');
    }
  };

  const loadPreviousChats = (chats: messageType[]) => {
    let updatedChatsByDate = {...chatsByDate};

    chats.forEach(obj => {
      const messageDate = new Date(obj.createdAt).toDateString();
      if (!updatedChatsByDate[messageDate]) {
        updatedChatsByDate[messageDate] = [];
      }
      updatedChatsByDate[messageDate].push(obj);
      console.log(updatedChatsByDate);
    });
    setChatsByDate(updatedChatsByDate);
  };

  function appendAndTransformChats(newChat: any) {
    // Extract the date from the message timestamp
    const messageDate = new Date(newChat.time).toDateString();

    let updatedChatsByDate = {...chatsByDate};

    // If the date doesn't exist in the chatsByDate object, create an array for it
    if (!updatedChatsByDate[messageDate]) {
      updatedChatsByDate[messageDate] = [];
    }

    // Add the new message to the corresponding date's array
    updatedChatsByDate[messageDate].push(newChat);

    // Set the state with the updated chatsByDate object
    setChatsByDate(updatedChatsByDate);
  }

  const handleWavingPress = () => {
    setChats([{text: 'Hey there!', sender: 'user'}]);
  };

  const makePhoneCall = () => {
    Linking.openURL(`tel:${userData?.phoneNumber}`);
  };

  useEffect(() => {
    getUserData();
    const subscriber = firestore()
      .collection('chats')
      .doc(myId + chatId)
      .collection('messages')
      .orderBy('createdAt', 'desc')
      .onSnapshot(documentSnapshot => {
        const allMsg = documentSnapshot.docs.map(item => {
          // console.log('item', item);
          //@ts-ignore
          return {...item._data, createdAt: new Date()};
        });
        loadPreviousChats(allMsg);
      });

    // Stop listening for updates when no longer required
    return () => {
      //@ts-ignore
      subscriber();
    };
  }, [chatId]);

  useEffect(() => {
    // Scroll to the bottom when component mounts or chatsByDate changes
    if (scrollViewRef.current) {
      //@ts-ignore
      scrollViewRef.current.scrollToEnd({animated: true});
    }
  }, [chatsByDate]);

  return (
    <SafeAreaView style={{flex: 1}}>
      {/* Header */}
      <View style={styles.CSHeader}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" size={18} style={[globalStyles.backIcon]} />
        </TouchableOpacity>
        <Image
          source={dummyImg}
          style={styles.profileImg}
          resizeMode="center"
        />
        <View style={{flex: 1}}>
          <Text style={[globalStyles.titleText, globalStyles.white]}>
            {userData?.fullName}
          </Text>
          <Text style={[globalStyles.lightText, globalStyles.white]}>
            {userData?.phoneNumber}
          </Text>
        </View>
        <View style={styles.iconContainer}>
          <Icon
            onPress={makePhoneCall}
            name="phone"
            size={18}
            style={globalStyles.backIcon}
          />
          <EntypoIcon.default
            name="attachment"
            size={18}
            style={globalStyles.backIcon}
          />
          <EntypoIcon.default
            name="dots-three-vertical"
            size={18}
            style={globalStyles.backIcon}
          />
        </View>
      </View>
      {/* ChatBody */}

      {Object.keys(chatsByDate).length === 0 ? (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
            gap: 4,
            height: '100%',
          }}>
          <Image source={noChats} resizeMode="contain" style={{height: 180}} />
          <Text style={{fontSize: 28, color: '#222'}}>No Message, yet</Text>
          <Text style={globalStyles.lightText}>
            Say Hello to {userData?.fullName}
          </Text>
          <WavingImage handleOnPress={handleWavingPress} />
        </View>
      ) : (
        <ScrollView
          style={{
            marginBottom: 60,
            paddingHorizontal: 12,
            // flexDirection: 'column-reverse',
          }}
          ref={scrollViewRef}
          onContentSizeChange={() =>
            //@ts-ignore
            scrollViewRef.current.scrollToEnd({animated: true})
          }>
          {Object.keys(chatsByDate).map(obj => (
            <>
              <Text style={styles.dateText}>{obj}</Text>
              {chatsByDate[obj]?.map((ch: messageType) => (
                <View style={{marginVertical: 4}}>
                  <View>
                    <Text
                      style={
                        ch.sentBy === myId
                          ? styles.userMessage
                          : styles.otherUserMessage
                      }>
                      {ch.messages}
                    </Text>
                  </View>
                  <Text
                    style={
                      ch.sentBy === myId
                        ? styles.userMessageTime
                        : styles.otherMessageTime
                    }>
                    {moment(ch.createdAt).format('h:mm a')}
                  </Text>
                </View>
              ))}
            </>
          ))}
        </ScrollView>
      )}

      <View style={styles.chatFieldContainer}>
        <TextInput
          style={styles.chatField}
          value={message}
          onChangeText={text => setMessage(text)}
          placeholder="Start typing..."
        />
        <TouchableOpacity style={styles.sendBtn} onPress={handleSendMessage}>
          <IoniIcon name="send-sharp" color="#fff" size={14} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  CSHeader: {
    flexDirection: 'row',
    backgroundColor: COLORS.primaryColor,
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 8,
    gap: 8,
    position: 'relative',
  },
  profileImg: {
    height: 36,
    width: 36,
    backgroundColor: COLORS.backgroundColor,
    borderRadius: 36,
  },
  iconContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  chatFieldContainer: {
    position: 'absolute',
    width: '95%',
    alignSelf: 'center',
    bottom: 0,
    flexDirection: 'row',
    margin: 8,
    gap: 8,
  },
  chatField: {
    backgroundColor: COLORS.white,

    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 24,
    flex: 10,
  },
  sendBtn: {
    backgroundColor: COLORS.primaryColor,
    padding: 8,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: COLORS.primaryColor,
    color: COLORS.white,
    padding: 8,

    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
  },
  userMessageTime: {
    alignSelf: 'flex-end',
    fontSize: 10,
  },
  otherMessageTime: {
    alignSelf: 'flex-start',
    fontSize: 10,
  },

  otherUserMessage: {
    alignSelf: 'flex-start',
    backgroundColor: COLORS.white,
    padding: 8,

    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
  },
  dateText: {
    backgroundColor: '#ccc',
    color: '#222',
    borderRadius: 20,
    paddingVertical: 4,
    paddingHorizontal: 12,
    fontWeight: '600',
    alignSelf: 'center',
    fontSize: 12,
  },
});
