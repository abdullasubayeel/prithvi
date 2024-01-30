import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {COLORS} from '../constants/colors';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {strings} from '../localization';

export type RootStackParamList = {
  Messages: {id: number} | undefined;
  Signin: {id: number} | undefined;
};

type HomeCardProps = {
  iconName: string;
  color: string;
  title: string;
  pressRoute: any;
};
const HomeCard = ({iconName, color, title, pressRoute}: HomeCardProps) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(pressRoute)}
      style={styles.HCCOntainer}>
      <Icon
        style={[styles.FTIcon, {backgroundColor: color}]}
        name={iconName}
        color="#fff"
        size={20}></Icon>

      <Text style={styles.titleStyle}>{strings[title]}</Text>
    </TouchableOpacity>
  );
};

export default HomeCard;

const styles = StyleSheet.create({
  HCCOntainer: {
    flex: 1,
    padding: 24,
    borderColor: '#eee',
    borderWidth: 2,
    borderRadius: 8,
    backgroundColor: COLORS.white,

    margin: 6,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
  },

  titleStyle: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
    color: '#222',
  },
  FTIcon: {padding: 20, borderRadius: 16},
});
