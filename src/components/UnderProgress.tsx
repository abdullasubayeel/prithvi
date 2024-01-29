import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {globalStyles} from '../styles/GlobalStyles';
import {COLORS} from '../constants/colors';

const underProgress = require('../assets/images/under_progress.png');
const UnderProgress = () => {
  return (
    <View style={styles.container}>
      <Image source={underProgress} style={styles.image} resizeMode="contain" />
      <Text
        style={[globalStyles.titleText, {textAlign: 'center', color: '#666'}]}>
        The Screen is under Maintainance. Visit later.
      </Text>
    </View>
  );
};

export default UnderProgress;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('screen').width,
    // height: Dimensions.get('screen').height,
    height: '100%',
    paddingHorizontal: 15,
    justifyContent: 'center',
  },
  image: {
    height: 200,
    alignSelf: 'center',
  },
});
