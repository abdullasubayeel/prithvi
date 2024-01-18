import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {globalStyles} from '../../../styles/GlobalStyles';
import React from 'react';

import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {COLORS} from '../../../constants/colors';

export type RootStackParamList = {
  'Farmer Details': {farmerId: number} | undefined;
  'Chat Screen': {chatId: number} | undefined;
  Messages: {chatId: number} | undefined;
};

const dummyImg = require('../../../assets/images/earth.png');
const farmerDummy = {
  id: 1,
  name: 'John Doe',
  age: 35,
  farmingExperience: '10 years',
  contactDetails: {
    email: 'john@example.com',
    phone: '123-456-7890',
  },
  location: {
    latitude: 37.7749,
    longitude: -122.4194,
  },
  farms: 'farm1',
};
const FarmerTile = ({
  id,
  name,
  age,
  farmingExperience,
  farmsOwned,
  farmerDetails,
  contactDetails,
  location,
  farmDetailsId,
}: any) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const handleChatClick = () => {
    navigation.navigate('Chat Screen', {chatId: id});
  };
  return (
    <TouchableOpacity
      style={styles.chatTileContainer}
      onPress={() => navigation.navigate('Farmer Details', {farmerId: id})}>
      <Image
        style={{flex: 1, borderRadius: 24, height: 56, width: 56}}
        source={dummyImg}
        resizeMode="contain"
      />
      <View style={styles.chatText}>
        <Text style={globalStyles.titleText}>{name}</Text>

        <View style={{flexDirection: 'row', gap: 8}}>
          <View style={{alignItems: 'center'}}>
            <Text style={globalStyles.lightText}>Age:</Text>
            <Text style={globalStyles.lightText}>{age}</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Text style={globalStyles.lightText}>Experience:</Text>
            <Text style={globalStyles.lightText}>{farmingExperience}</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Text style={globalStyles.lightText}>Total Farms:</Text>
            <Text style={globalStyles.lightText}>{farmsOwned.length}</Text>
          </View>
        </View>
      </View>
      <View style={styles.contactView}>
        <Icon
          name="comment"
          size={24}
          style={{color: COLORS.primaryColor, marginHorizontal: 8}}
          onPress={handleChatClick}
        />
        {/* <Text>{farmerDetails}</Text> */}
      </View>
    </TouchableOpacity>
  );
};

export default FarmerTile;

const styles = StyleSheet.create({
  chatTileContainer: {
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    padding: 8,
    gap: 8,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    elevation: 1,
  },
  chatText: {
    gap: 8,
    flex: 3,
  },
  contactView: {
    flex: 2,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    gap: 4,
  },
});
