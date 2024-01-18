import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useLayoutEffect} from 'react';
import HomeCard from '../components/HomeCard';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomButton from '../components/CustomButton';
import {HOME_DATA} from '../constants/HomeData';
import SplashScreen from 'react-native-splash-screen';

const Home = ({navigation}: any) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.homeContainer}>
        <View style={styles.cardContainer}>
          <FlatList
            data={HOME_DATA}
            numColumns={2}
            renderItem={({item}) => <HomeCard {...item} />}
            keyExtractor={item => item.id}></FlatList>
        </View>

        <CustomButton
          btnText="Continue"
          dark={true}
          onPress={() => navigation.navigate('Settings')}
          loading={false}
          disabled={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  homeContainer: {
    paddingHorizontal: 8,
    flex: 1,
    backgroundColor: '#F5F5FA',
  },
  cardContainer: {
    // flexWrap: 'wrap',
    // flex: 2,
    marginTop: 8,
    flex: 3,
    gap: 12,
  },
  heading: {
    textAlign: 'center',
    fontSize: 24,
    color: '#222',
    fontWeight: '800',
    marginVertical: 12,
  },
  text: {
    textAlign: 'center',
    fontSize: 14,
    color: '#666',
  },
  darkBtn: {
    backgroundColor: '#222222',
    paddingHorizontal: 32,
    paddingVertical: 24,
    fontWeight: '600',
    width: 300,
    color: '#fff',
    borderRadius: 24,
    alignSelf: 'center',
    alignItems: 'center',
  },
});
