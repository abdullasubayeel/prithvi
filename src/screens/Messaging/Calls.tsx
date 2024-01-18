import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {dummyCalls} from '../../data/dummyData';
import {COLORS} from '../../constants/colors';
import {globalStyles} from '../../styles/GlobalStyles';
import moment from 'moment';

const earth = require('../../assets/images/earth.png');
type callDataType = {
  id: number;
  name: string;
  frequency: number;
  status: string;
  time: string;
};

const Calls = () => {
  const [searchText, setSearchText] = useState('');
  const [filteredCall, setFilteredCall] = useState<callDataType[]>([]);

  useEffect(() => {
    const newArr = dummyCalls.filter(obj => obj.name.includes(searchText));
    setFilteredCall(newArr);
  }, [searchText]);
  return (
    <ScrollView style={styles.chatContainer}>
      <TextInput
        placeholder="Search"
        value={searchText}
        onChangeText={text => setSearchText(text)}
        style={styles.searchField}></TextInput>

      {searchText ? (
        <View>
          {filteredCall.map(obj => (
            <View key={obj.id} style={styles.myStatus}>
              <Image source={earth} style={styles.myProfilePic} />
              <View style={{flex: 3}}>
                <Text
                  style={[
                    globalStyles.titleText,
                    obj.status === 'Missed' ? {color: 'red'} : {},
                  ]}>
                  {obj.name}
                </Text>
                <Text
                  style={[
                    obj.status === 'Missed'
                      ? {color: 'red'}
                      : globalStyles.lightText,
                  ]}>
                  {obj.status}
                </Text>
              </View>
              <Text style={[globalStyles.lightText, {flex: 2}]}>
                {moment(obj.time, 'YYYYMMDD').fromNow()}
              </Text>
            </View>
          ))}
        </View>
      ) : (
        <>
          <View>
            <Text
              style={[
                globalStyles.lightText,
                {marginTop: 20, marginLeft: 16, marginBottom: 8},
              ]}>
              Recent
            </Text>

            {dummyCalls.map(obj => (
              <View key={obj.id} style={styles.myStatus}>
                <Image source={earth} style={styles.myProfilePic} />
                <View style={{flex: 3}}>
                  <Text
                    style={[
                      globalStyles.titleText,
                      obj.status === 'Missed' ? {color: 'red'} : {},
                    ]}>
                    {obj.name}
                    &nbsp;{obj.frequency > 1 ? `(${obj.frequency})` : ''}
                  </Text>
                  <Text
                    style={[
                      obj.status === 'Missed'
                        ? {color: 'red'}
                        : globalStyles.lightText,
                    ]}>
                    {obj.status}
                  </Text>
                </View>
                <Text style={[globalStyles.lightText, {flex: 2}]}>
                  {moment(obj.time, 'YYYYMMDD').fromNow()}
                </Text>
              </View>
            ))}
          </View>
        </>
      )}
    </ScrollView>
  );
};

export default Calls;

const styles = StyleSheet.create({
  chatContainer: {
    backgroundColor: COLORS.backgroundColor,
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
    height: 55,
    width: 55,
    backgroundColor: '#b0e2ab',
    flex: 1,
  },
});
