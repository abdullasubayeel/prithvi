import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {COLORS} from '../../constants/colors';
import FarmerTile from './helpers/FarmerTile';
import {dummyFarmers} from '../../data/dummyData';

const FarmerList = () => {
  return (
    <ScrollView style={styles.chatContainer}>
      {dummyFarmers.map(obj => (
        <FarmerTile key={obj.id} {...obj} />
      ))}
    </ScrollView>
  );
};

export default FarmerList;

const styles = StyleSheet.create({
  chatContainer: {
    backgroundColor: COLORS.backgroundColor,
    gap: 8,
  },
});
