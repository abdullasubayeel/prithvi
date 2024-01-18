import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6';
import * as EntypoIcon from 'react-native-vector-icons/Entypo';
import {globalStyles} from '../../../styles/GlobalStyles';
import {COLORS} from '../../../constants/colors';
import {useNavigation} from '@react-navigation/native';

const dummyImg = require('../../../assets/images/earth.png');
const ChatScreen = ({route}: any) => {
  const {chatId} = route.params;
  const [message, setMessage] = useState('');
  const navigation = useNavigation();
  const dummyChat = {
    name: 'John Doe',
    status: 'Online',
  };
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
            {dummyChat.name}
          </Text>
          <Text style={[globalStyles.lightText, globalStyles.white]}>
            {dummyChat.status}
          </Text>
        </View>
        <View style={styles.iconContainer}>
          <Icon name="phone" size={18} style={globalStyles.backIcon} />
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
      <View></View>

      <View style={styles.chatFieldContainer}>
        <TextInput
          style={styles.chatField}
          value={message}
          onChangeText={text => setMessage(text)}
        />
        <TouchableOpacity></TouchableOpacity>
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
  },
  chatField: {
    backgroundColor: COLORS.white,
    margin: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 24,
  },
});
