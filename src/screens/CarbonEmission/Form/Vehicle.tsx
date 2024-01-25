import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import {COLORS} from '../../../constants/colors';
import SelectDropdown from 'react-native-select-dropdown';
import DatePicker from 'react-native-date-picker';

import {useState} from 'react';
import {globalStyles} from '../../../styles/GlobalStyles';
import moment from 'moment';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Formik} from 'formik';
import * as Yup from 'yup';

const vehicleSurveyValidationSchema = Yup.object().shape({
  date: Yup.date().required('Date is required'),
  country: Yup.string().required('Country is required'),
  vehicle: Yup.string().required('Vehicle is required'),
  distance: Yup.number()
    .required('Distance is required')
    .min(0, 'Distance must be greater than or equal to 0'),
  noOfPeople: Yup.number()
    .required('Number of people is required')
    .min(0, 'Number of people must be greater than or equal to 0'),
});

const initialValues = {
  date: new Date(),
  country: 'india',
  vehicle: '',
  distance: 0,
  noOfPeople: 0,
};

const handleVehicleForm = (data: any) => {};

const Vehicle = () => {
  const countries = ['India', 'Canada', 'Australia', 'Ireland'];
  const vehicles = [
    'Super Splendor',
    'Apache RTR 4V',
    'Royal Enfield Hunter 350',
  ];
  const [selectedCountry, setCountry] = useState('football');

  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  return (
    <View style={styles.container}>
      <Formik
        validationSchema={vehicleSurveyValidationSchema}
        initialValues={initialValues}
        onSubmit={values => handleVehicleForm(values)}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          isValid,
        }) => {
          return (
            <>
              <View style={{flexDirection: 'column', flex: 1}}>
                <Text style={globalStyles.lightText}>Select Your Country</Text>
                <SelectDropdown
                  data={countries}
                  buttonStyle={{
                    borderRadius: 24,
                    borderWidth: 1,
                    borderColor: COLORS.primaryColor,
                    flex: 1,
                    elevation: 2,
                    marginVertical: 8,
                    backgroundColor: COLORS.white,
                  }}
                  buttonTextStyle={{color: '#222'}}
                  onSelect={(selectedItem, index) => {
                    setCountry(selectedItem);
                    handleChange('country');
                  }}
                  buttonTextAfterSelection={(selectedItem, index) => {
                    // text represented after item is selected
                    // if data array is an array of objects then return selectedItem.property to render after item is selected
                    return selectedItem;
                  }}
                  rowTextForSelection={(item, index) => {
                    // text represented for each item in dropdown
                    // if data array is an array of objects then return item.property to represent item in dropdown
                    return item;
                  }}
                />
                {errors.country && (
                  <Text style={{fontSize: 10, color: 'red'}}>
                    {errors.country}
                  </Text>
                )}
              </View>
              <View>
                <Text style={globalStyles.lightText}>Survey Date </Text>
                <Pressable
                  onPress={() => setOpen(true)}
                  style={styles.inputStyles}>
                  <Text>
                    {date
                      ? moment(date).format('Do MMM YYYY h:mm a')
                      : 'Select Date'}
                  </Text>
                  <Icon name="calendar" size={24} color={COLORS.primaryColor} />
                </Pressable>
                <DatePicker
                  modal
                  open={open}
                  date={date}
                  onDateChange={() => handleChange('date')}
                  onConfirm={date => {
                    setOpen(false);
                    setDate(date);
                  }}
                  onCancel={() => {
                    setOpen(false);
                  }}
                />
              </View>

              <View>
                <Text>Select your Vehicle</Text>
                <SelectDropdown
                  searchPlaceHolder="Select Vehicle"
                  data={vehicles}
                  buttonStyle={{
                    borderRadius: 24,
                    borderWidth: 1,
                    borderColor: COLORS.primaryColor,
                    flex: 1,
                    elevation: 2,
                    marginVertical: 8,
                    backgroundColor: COLORS.white,
                  }}
                  buttonTextStyle={{color: COLORS.black}}
                  onSelect={(selectedItem, index) => handleChange('vehicle')}
                  buttonTextAfterSelection={(selectedItem, index) => {
                    // text represented after item is selected
                    // if data array is an array of objects then return selectedItem.property to render after item is selected
                    return selectedItem;
                  }}
                  rowTextForSelection={(item, index) => {
                    // text represented for each item in dropdown
                    // if data array is an array of objects then return item.property to represent item in dropdown
                    return item;
                  }}
                />
                {errors.vehicle && (
                  <Text style={{fontSize: 10, color: 'red'}}>
                    {errors.vehicle}
                  </Text>
                )}
              </View>
              <View>
                <Text>Distance</Text>
                <TextInput
                  keyboardType="number-pad"
                  value={values.distance.toString()}
                  onChangeText={handleChange('distance')}
                  style={styles.inputStyles}></TextInput>
              </View>

              <View>
                <Text>No. of People</Text>
                <TextInput
                  keyboardType="number-pad"
                  value={values.noOfPeople.toString()}
                  onChangeText={handleChange('noOfPeople')}
                  style={styles.inputStyles}></TextInput>
              </View>
            </>
          );
        }}
      </Formik>
    </View>
  );
};

export default Vehicle;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.backgroundColor,
    flex: 1,
    paddingHorizontal: 16,
    gap: 16,
  },
  inputStyles: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderWidth: 1,
    borderColor: COLORS.primaryColor,
    backgroundColor: COLORS.white,
    elevation: 2,
    borderRadius: 30,
    marginVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
