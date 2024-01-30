import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {COLORS} from '../constants/colors';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useDispatch} from 'react-redux';
import {logout} from '../redux/slices/authSlice';
import {removeAsyncData, storeAsyncData} from '../utilities/asyncStorage';
import {Switch} from '@rneui/themed';
import {strings} from '../localization';
import AuthContext from '../context/AuthProvider';

const logo = require('../assets/images/prithvi.png');
const indiaFlag = require('../assets/images/india.png');
const usFlag = require('../assets/images/us.png');
export type RootStackParamList = {
  Messages: {id: number} | undefined;
  Signin: {id: number} | undefined;
};

const CustomHeader = ({title}: any) => {
  const {lng, setLng} = useContext(AuthContext);

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const dispatch = useDispatch();

  const [isEnglish, setEnglish] = useState(true);

  const handleLogout = () => {
    dispatch(logout({}));
    removeAsyncData('user');
    navigation.navigate('Signin');
  };

  const handleLanguageChange = async (e: any) => {
    const newLanguage = isEnglish ? 'hn' : 'en';
    setLng(newLanguage);
    strings.setLanguage(newLanguage);
    setEnglish(!isEnglish);
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
      <View
        style={{
          flexDirection: 'row',

          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image source={indiaFlag} style={styles.flag} resizeMode="contain" />

        <Switch
          value={isEnglish}
          onChange={handleLanguageChange}
          style={styles.switch}
          color={COLORS.primaryColor}
        />
        <Image source={usFlag} style={styles.flag} resizeMode="contain" />
      </View>

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
  flag: {
    height: 18,
    width: 18,
  },
  switch: {
    justifyContent: 'center',

    color: COLORS.primaryColor,
  },
});
