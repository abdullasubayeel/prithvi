import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ToastAndroid,
} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants/colors';
import CustomButton from '../../components/CustomButton';

import NetInfo from '@react-native-community/netinfo';

const voidImage = require('../../assets/images/void.png');

const Offline = ({navigation}: any) => {
  const checkConnection = () => {
    NetInfo.fetch().then(state => {
      if (state.isConnected) {
        return true;
      }
    });
    return false;
  };

  const handleClick = () => {
    if (checkConnection()) {
      navigation.navigate('Auth');
    } else {
      ToastAndroid.show('No Connection found', ToastAndroid.SHORT);
    }
  };
  return (
    <View style={styles.container}>
      <Image style={styles.image} resizeMode="contain" source={voidImage} />
      <Text style={styles.title}>No Internet Connection</Text>
      <Text>Your Connection appears to off-line.Try to reload</Text>

      <CustomButton
        onPress={handleClick}
        btnText="Reload"
        dark={true}
        disabled={false}
        loading={false}
      />
    </View>
  );
};

export default Offline;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.backgroundColor,
    height: Dimensions.get('screen').height,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 8,
    gap: 8,
  },
  image: {
    height: 200,
    width: 200,
  },
  title: {
    color: '#222',
    fontWeight: '400',
    fontSize: 22,
  },
});
