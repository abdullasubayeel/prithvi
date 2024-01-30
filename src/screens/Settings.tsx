import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SettingsTile from '../components/SettingsTile';
import CustomButton from '../components/CustomButton';
const bell = require('../assets/images/bell.png');

const Settings = ({navigation}: any) => {
  const SETTINGS_DATA = [
    {
      id: '0',
      title: 'Daily expenses',
      text: 'Get a remainder to add your expenses',
    },
    {
      id: '1',
      title: 'Bill remainders',
      text: "We'll remind you when it's time to pay the bills",
    },
  ];
  return (
    <View style={styles.settingContainer}>
      <Image source={bell} style={styles.imageStyle} resizeMode="contain" />
      <Text style={styles.heading}>A little nudge?</Text>
      <Text style={styles.desc}>
        Users with notifications enable are over 2x more likely to stick to
        their budgets.
      </Text>
      <View style={styles.cardContainer}>
        {SETTINGS_DATA.map(obj => {
          return <SettingsTile key={obj.id} {...obj} />;
        })}
      </View>
      <CustomButton
        onPress={() => navigation.navigate('Subscribe')}
        dark={true}
        btnText="View Plans"
        loading={false}
        disabled={false}
      />
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  settingContainer: {
    flex: 1,
    paddingHorizontal: 8,
    backgroundColor: '#F5F5FA',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  imageStyle: {
    height: 120,
    width: 120,
  },
  heading: {
    textAlign: 'center',
    fontSize: 20,
    color: '#222',
    fontWeight: '800',
    marginVertical: 12,
  },
  desc: {
    textAlign: 'center',
  },
  cardContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginVertical: 12,
    elevation: 2,
  },
});
