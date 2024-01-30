import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Switch} from '@rneui/themed';
import {COLORS} from '../constants/colors';

const SettingsTile = ({title, text}: any) => {
  const [toggle, setToggle] = useState(false);
  return (
    <View style={styles.settingsTileContainer}>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text>{text}</Text>
      </View>
      <Switch
        value={toggle}
        onChange={e => setToggle(!toggle)}
        style={styles.switch}
        color={COLORS.primaryColor}
      />
    </View>
  );
};

export default SettingsTile;

const styles = StyleSheet.create({
  settingsTileContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginVertical: 8,
  },
  content: {justifyContent: 'center', width: '80%'},
  title: {fontWeight: '700', color: '#222'},
  switch: {
    justifyContent: 'flex-end',
    width: '20%',
    color: COLORS.primaryColor,
  },
});
