import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Switch} from '@rneui/themed';

const SettingsTile = ({title, toggle, text}: any) => {
  return (
    <View style={styles.settingsTileContainer}>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text>{text}</Text>
      </View>
      <Switch value={toggle} style={styles.switch} />
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
  switch: {justifyContent: 'flex-end', width: '20%'},
});
