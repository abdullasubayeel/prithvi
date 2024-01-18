import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ChatTile from './helpers/ChatTile';
import {COLORS} from '../../constants/colors';

const Chats = () => {
  const dummyData = [
    {
      id: 1,
      name: 'John Doe',
      recentMessage: 'Hello there!',
      recentMessageCount: 3,
      newMessage: true,
      lastMessageTime: new Date('2024-01-12T10:30:00'),
    },
    {
      id: 2,
      name: 'Alice Smith',
      recentMessage: 'How are you?',
      recentMessageCount: 1,
      newMessage: false,
      lastMessageTime: new Date('2024-01-11T15:45:00'),
    },
    {
      id: 3,
      name: 'Bob Johnson',
      recentMessage: "I'll be there soon.",
      recentMessageCount: 0,
      newMessage: false,
      lastMessageTime: new Date('2024-01-10T08:20:00'),
    },
  ];

  console.log(dummyData);

  return (
    <ScrollView style={styles.chatContainer}>
      {dummyData.map(obj => (
        <ChatTile key={obj.id} {...obj} />
      ))}
    </ScrollView>
  );
};

export default Chats;

const styles = StyleSheet.create({
  chatContainer: {
    backgroundColor: COLORS.backgroundColor,
  },
});
