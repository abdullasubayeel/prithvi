import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';

import {dummyFarmers} from '../../../data/dummyData';
import {globalStyles} from '../../../styles/GlobalStyles';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {COLORS} from '../../../constants/colors';
import {FlatList} from 'react-native-gesture-handler';
import FarmerActionsListCard from './FarmerActionsListCard';
const farmImg = require('../../../assets/images/farm-map.jpg');
const FarmerDetails = ({route, navigation}: any) => {
  const {farmerId} = route.params;
  const farmerDetails = dummyFarmers.find(obj => obj.id === farmerId);

  const handleChatClick = () => {
    navigation.navigate('Chat Screen', {chatId: farmerId});
  };

  const data = [
    {id: '1', imageUrl: farmImg},
    {id: '2', imageUrl: farmImg},
    {id: '3', imageUrl: farmImg},
  ];

  const renderItem = ({item}: any) => {
    return (
      <View style={styles.slide}>
        <Image source={item.imageUrl} style={styles.image} />
      </View>
    );
  };
  const FARMER_ACTIONS = [
    {
      id: 1,
      handlePress: () => {},
      title: 'Plant',
      desc: 'Plant a sapling and track for 7 Days.',
    },
    {
      id: 2,
      handlePress: () => {},
      title: 'Request in Bulk',
      desc: 'Put out a request for any particular Fruit, Vegetable and Grains.',
    },
    {
      id: 3,
      handlePress: () => {},
      title: 'Organic Products',
      desc: 'Request for Organic Products',
    },
    {
      id: 4,
      handlePress: () => {},
      title: 'Get Poultry',
      desc: 'Request for Poultry',
    },
  ];

  return (
    <View style={globalStyles.container}>
      <View style={styles.carouselContainer}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          horizontal={true}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <ScrollView style={styles.content}>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
          }}>
          <View>
            <Text style={styles.heading}>
              {farmerDetails?.name} ({farmerDetails?.age})
            </Text>
            <Text style={globalStyles.lightText}>
              Farming Experience: {farmerDetails?.farmingExperience}
            </Text>
            <Text> {farmerDetails?.contactDetails.email}</Text>
            <Text> {farmerDetails?.contactDetails.phone}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 12,
            }}>
            <Icon
              name="comment"
              size={32}
              style={{color: COLORS.primaryColor, marginHorizontal: 8}}
              onPress={handleChatClick}
            />
            <Icon
              name="phone"
              size={32}
              style={{color: COLORS.primaryColor, marginHorizontal: 8}}
              onPress={handleChatClick}
            />
          </View>
        </View>
        <View style={styles.cardContainer}>
          <FlatList
            data={FARMER_ACTIONS}
            numColumns={2}
            contentContainerStyle={{gap: 12}}
            columnWrapperStyle={{gap: 12}}
            renderItem={({item}) => (
              <FarmerActionsListCard {...item} />
            )}></FlatList>
        </View>
      </ScrollView>
    </View>
  );
};

export default FarmerDetails;

const styles = StyleSheet.create({
  heading: {
    color: '#222',
    fontSize: 24,
  },
  content: {
    margin: 12,
    flex: 1,
  },

  carouselContainer: {},
  slide: {
    width: Dimensions.get('window').width,
    height: 200, // Set the height as needed
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    width: null,
    height: null,
  },
  cardContainer: {
    // flexWrap: 'wrap',
    // flex: 2,
    marginVertical: 12,
    gap: 12,

    flex: 1,
    // backgroundColor: 'red',
  },
});
