import {Dimensions, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {globalStyles} from '../../styles/GlobalStyles';
import {COLORS} from '../../constants/colors';
import PieChart from 'react-native-pie-chart';
import * as Progress from 'react-native-progress';

import Icon from 'react-native-vector-icons/FontAwesome';
import FaIcon from 'react-native-vector-icons/FontAwesome5';
import MiIcon from 'react-native-vector-icons/MaterialIcons';
import {LineChart} from 'react-native-gifted-charts';

const CarbonDashboard = ({navigation}: any) => {
  const widthAndHeight = 150;
  const series = [123, 321, 123, 789, 537];
  const sliceColor = ['#fbd203', '#ffb300', '#ff9100', '#ff6c00', '#ff3c00'];
  const lineChartData = [
    {value: 50},
    {value: 80},
    {value: 90},
    {value: 160},
    {value: 70},
    {value: 70},
    {value: 20},
  ];

  const handleSubmitBtn = () => {
    navigation.navigate('Carbon Emission');
  };
  return (
    <View style={styles.bgContainer}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={globalStyles.heading}>Today</Text>
        <Pressable onPress={handleSubmitBtn}>
          <Text style={styles.anchorBtn}>Submit Survey</Text>
        </Pressable>
      </View>
      {/* Main Card */}
      <View style={globalStyles.card}>
        <Text style={globalStyles.titleText}>Carbon Emission</Text>
        <Text>Remaining = Goal - Vehicle + House</Text>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 24}}>
          <View style={{position: 'relative'}}>
            <View
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 42, fontWeight: '700', color: '#222'}}>
                684
              </Text>
              <Text>Remaining</Text>
            </View>
            <PieChart
              widthAndHeight={widthAndHeight}
              series={series}
              sliceColor={sliceColor}
              coverRadius={0.9}
              style={{flex: 1, margin: 12}}
            />
          </View>

          <View style={{gap: 12}}>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 12}}>
              <Icon name="flag" size={32} color={'#0f951e'} />
              <View>
                <Text>Base Goal</Text>
                <Text style={globalStyles.boldText}>1,500</Text>
              </View>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 12}}>
              <Icon name="car" size={30} color={'#e4ae41'} />
              <View>
                <Text>Vehicle</Text>
                <Text style={globalStyles.boldText}>-600</Text>
              </View>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 12}}>
              <Icon name="home" size={32} color={'#3f72c4'} />
              <View>
                <Text>House</Text>
                <Text style={globalStyles.boldText}>259</Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      {/* Vehicle and House Card */}
      <View style={{flexDirection: 'row', gap: 16, alignItems: 'stretch'}}>
        <View style={[globalStyles.card, {flex: 1}]}>
          <Text style={globalStyles.boldText}>Vehicle</Text>
          <View style={{flexDirection: 'row', marginVertical: 8}}>
            <Icon name="road" size={24} color={'#2b2b2b'} />
            <Text style={globalStyles.boldText}> 200 Km</Text>
          </View>
          <Text>Goal: -300</Text>
          <Progress.Bar
            progress={0.3}
            width={150}
            color={COLORS.primaryColor}
            style={{marginVertical: 12}}></Progress.Bar>
        </View>
        <View style={[globalStyles.card, {flex: 1}]}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={globalStyles.boldText}> House</Text>
            <Icon name="plus" size={24} color={'#2b2b2b'} />
          </View>

          <View>
            <View style={{flexDirection: 'row', marginVertical: 8, gap: 16}}>
              <MiIcon name="soup-kitchen" size={24} color={'#0c5700'} />
              <Text style={globalStyles.boldText}> 200 Km</Text>
            </View>
            <View style={{flexDirection: 'row', marginVertical: 8, gap: 16}}>
              <FaIcon name="lightbulb" size={24} color={'#e1b532'} />
              <Text style={globalStyles.boldText}> 0.03 KWh</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={[globalStyles.card]}>
        <Text style={globalStyles.titleText}>Emission </Text>
        <Text> Last 90 Days</Text>

        <LineChart
          data={lineChartData}
          yAxisThickness={0}
          xAxisThickness={0}
          width={Dimensions.get('screen').width * 0.7}
          noOfSections={5}
          height={120}
        />
      </View>
    </View>
  );
};

export default CarbonDashboard;

const styles = StyleSheet.create({
  bgContainer: {
    backgroundColor: COLORS.backgroundColor,
    padding: 16,
    gap: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  anchorBtn: {
    color: '#003771',
    backgroundColor: '#e0e9ff',
    borderRadius: 12,
    fontWeight: '600',
    padding: 8,
    elevation: 2,
  },
  mainCardContent: {},
});
