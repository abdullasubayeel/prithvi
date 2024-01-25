import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {COLORS} from '../constants/colors';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useDispatch} from 'react-redux';
import {logout} from '../redux/slices/authSlice';
import {removeAsyncData} from '../utilities/asyncStorage';

const logo = require('../assets/images/prithvi.png');
export type RootStackParamList = {
  Messages: {id: number} | undefined;
  Signin: {id: number} | undefined;
};

const CustomHeader = ({title}: any) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout({}));
    removeAsyncData('user');
    navigation.navigate('Signin');
  };
  return (
    <View style={styles.headerContainer}>
      {title !== 'Home' && (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" size={18} style={styles.backIcon} />
        </TouchableOpacity>
      )}
      <Image source={logo} style={styles.logo} resizeMode="contain" />
      <Text style={styles.heading}>{title}</Text>
      <Icon
        name="comment"
        size={24}
        style={{color: COLORS.black, marginHorizontal: 8}}
        onPress={() => navigation.navigate('Messages')}
      />
      <AntIcon
        name="logout"
        size={24}
        style={{color: COLORS.black, marginHorizontal: 8}}
        onPress={handleLogout}
      />
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: COLORS.backgroundColor,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 16,
    gap: 12,
  },
  heading: {
    color: COLORS.black,
    fontSize: 20,
    fontWeight: '600',
    flex: 1,
  },
  backIcon: {
    color: COLORS.black,
    margin: 8,
  },
  logo: {
    height: 40,
    width: 40,
  },
});
