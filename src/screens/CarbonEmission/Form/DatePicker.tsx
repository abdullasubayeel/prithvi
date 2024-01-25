import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {globalStyles} from '../../../styles/GlobalStyles';
import DatePicker from 'react-native-date-ranges';
import {COLORS} from '../../../constants/colors';
import {Button} from 'react-native-paper';
import CustomButton from '../../../components/CustomButton';
const calendar = require('../../../assets/images/calendar.png');
const DateSelect = () => {
  const handleDateSelect = (ranges: any) => {
    console.log(ranges);
  };

  const selectionRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  };

  return (
    <View style={styles.container}>
      <Image source={calendar} style={styles.calendar} resizeMode="contain" />
      <Text style={styles.heading}>Select the Date range for your Survey</Text>
      <DatePicker
        style={{flex: 1, borderWidth: 1, borderColor: COLORS.primaryColor}}
        customButton={(onConfirm: any) => (
          <CustomButton
            onPress={onConfirm}
            btnText="Confirm"
            dark={true}
            disabled={false}
            loading={false}
          />
        )}
        markText="Select Date range for you survey"
        customStyles={{
          placeholderText: {fontSize: 20, color: COLORS.black}, // placeHolder style
          headerStyle: {backgroundColor: COLORS.primaryColor}, // title container style
          headerMarkTitle: {
            color: COLORS.white,
            content: 'Choose your date',
          }, // title mark style
          headerDateTitle: {}, // title Date style
          contentInput: {}, //content text container style
          contentText: {}, //after selected text Style
        }} // optional
        centerAlign // optional text will align center or not
        allowFontScaling={false} // optional
        placeholder={'Apr 27, 2018 → Jul 10, 2018'}
        mode={'range'}
      />
    </View>
  );
};

export default DateSelect;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.backgroundColor,
    paddingHorizontal: 16,
  },
  heading: {
    fontSize: 32,
    color: '#222',
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 16,
  },
  calendar: {
    height: 200,

    alignSelf: 'center',
    marginVertical: 16,
  },
});
