import {GestureResponderEvent, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {COLORS} from '../constants/colors';
import {ActivityIndicator} from 'react-native-paper';

type CustomButtonProps = {
  onPress: () => void;
  btnText: string;
  dark: boolean;
  disabled: boolean;
  loading: boolean;
};
const CustomButton = ({
  onPress,
  btnText,
  dark,
  disabled,
  loading,
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      style={[dark ? styles.darkBtn : styles.lightBtn]}
      disabled={disabled || loading}
      onPress={onPress}>
      {loading ? (
        <ActivityIndicator size="small" color={dark ? '#fff' : '#222'} />
      ) : (
        <Text
          style={[styles.boldText, dark ? styles.whiteFont : styles.darkFont]}>
          {btnText}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  whiteFont: {
    color: '#fff',
  },
  darkFont: {color: '#222'},
  boldText: {fontWeight: '700'},
  darkBtn: {
    backgroundColor: COLORS.primaryColor,
    paddingHorizontal: 32,
    paddingVertical: 24,
    fontWeight: '600',
    color: '#fff',
    borderRadius: 24,
    alignSelf: 'stretch',
    alignItems: 'center',
    marginVertical: 8,
  },
  lightBtn: {
    backgroundColor: '#fff',
    paddingHorizontal: 32,
    paddingVertical: 24,
    fontWeight: '600',
    borderRadius: 24,

    alignItems: 'center',
    alignSelf: 'stretch',
    marginTop: 8,
  },
});
