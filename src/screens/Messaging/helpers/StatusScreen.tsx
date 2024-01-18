import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';
import {COLORS} from '../../../constants/colors';
import {globalStyles} from '../../../styles/GlobalStyles';
import {dummyStatus} from '../../../data/dummyData';
import moment from 'moment';

const earth = require('../../../assets/images/earth.png');

type statusDataType = {
  id: number;
  name: string;
  time: string;
};

const StatusScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [filteredStatus, setFilteredStatus] = useState<statusDataType[]>([]);

  useEffect(() => {
    const newArr = dummyStatus.filter(obj => obj.name.includes(searchText));
    setFilteredStatus(newArr);
  }, [searchText]);
  return (
    <ScrollView style={styles.chatContainer}>
      {/* <Text style={styles.heading}>Updates</Text> */}
      <TextInput
        placeholder="Search"
        value={searchText}
        onChangeText={text => setSearchText(text)}
        style={styles.searchField}></TextInput>

      {searchText ? (
        <View>
          {filteredStatus.map(obj => (
            <View key={obj.id} style={styles.myStatus}>
              <Image source={earth} style={styles.myProfilePic} />
              <View>
                <Text style={globalStyles.titleText}>{obj.name}</Text>
                <Text style={globalStyles.lightText}>
                  {moment(obj.time, 'YYYYMMDD').fromNow()}
                </Text>
              </View>
            </View>
          ))}
        </View>
      ) : (
        <>
          <View style={styles.statusHeader}>
            <Text style={globalStyles.titleText}>Status</Text>
            <Icon name="plus" size={18} style={styles.plusIcon} />
          </View>

          <View style={styles.myStatus}>
            <Image source={earth} style={styles.myProfilePic} />
            <View>
              <Text style={globalStyles.titleText}>My Status</Text>
              <Text style={globalStyles.lightText}>Add to my status</Text>
            </View>
          </View>

          <View>
            <Text
              style={[
                globalStyles.lightText,
                {marginTop: 20, marginLeft: 16, marginBottom: 8},
              ]}>
              RECENT UPDATES
            </Text>

            {dummyStatus.map(obj => (
              <View key={obj.id} style={styles.myStatus}>
                <Image source={earth} style={styles.myProfilePic} />
                <View>
                  <Text style={globalStyles.titleText}>{obj.name}</Text>
                  <Text style={globalStyles.lightText}>
                    {moment(obj.time, 'YYYYMMDD').fromNow()}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </>
      )}
    </ScrollView>
  );
};

export default StatusScreen;

const styles = StyleSheet.create({
  heading: {
    fontSize: 36,
    fontWeight: '900',
  },
  chatContainer: {
    backgroundColor: COLORS.backgroundColor,
    // marginHorizontal: 8,
  },
  plusIcon: {
    backgroundColor: '#ddd',
    color: '#365aa1',
    borderRadius: 20,
    padding: 4,
  },
  statusHeader: {
    marginHorizontal: 16,
    marginVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchField: {
    backgroundColor: COLORS.white,
    marginHorizontal: 16,
    borderRadius: 8,
    marginVertical: 12,
    paddingHorizontal: 12,
  },
  myStatus: {
    backgroundColor: COLORS.white,
    padding: 16,
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
  },
  myProfilePic: {
    borderRadius: 50,
    height: 60,
    width: 60,
    backgroundColor: '#b0e2ab',
  },
});
