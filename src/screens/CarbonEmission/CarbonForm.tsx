import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';
import Vehicle from './Form/Vehicle';
import Household from './Form/Household';
import Electricity from './Form/Electricity';
import {COLORS} from '../../constants/colors';
import DateSelect from './Form/DatePicker';

const CarbonForm = () => {
  return (
    <View style={styles.container}>
      <ProgressSteps
        activeStepIconBorderColor={COLORS.primaryColor}
        activeLabelColor={COLORS.primaryColor}
        activeStepNumColor={COLORS.primaryColor}
        completedProgressBarColor={COLORS.primaryColor}
        completedStepIconColor={COLORS.primaryColor}>
        <ProgressStep label="Date">
          <View>
            <DateSelect />
          </View>
        </ProgressStep>
        <ProgressStep label="Vehicle">
          <View>
            <Vehicle />
          </View>
        </ProgressStep>
        <ProgressStep label="Household">
          <View style={{alignItems: 'center'}}>
            <Household />
          </View>
        </ProgressStep>
        <ProgressStep label="Results">
          <View style={{alignItems: 'center'}}>
            <Electricity />
          </View>
        </ProgressStep>
      </ProgressSteps>
    </View>
  );
};

export default CarbonForm;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.backgroundColor,
    flex: 1,
  },
});
