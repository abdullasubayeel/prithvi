import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../constants/colors';
import {Icon} from '@rneui/themed';

const FeatureTile = ({
  icon,
  title,
  desc,
}: {
  icon: string;
  title: string;
  desc: string;
}) => {
  return (
    <View style={styles.FTContainer}>
      <Icon
        style={styles.FTIcon}
        name={icon}
        color={COLORS.primaryColor}></Icon>
      <View style={styles.FTContent}>
        <Text style={styles.FTTiltle}>{title}</Text>
        <Text style={styles.FTDesc}>{desc}</Text>
      </View>
    </View>
  );
};

export default FeatureTile;

const styles = StyleSheet.create({
  FTContainer: {
    flex: 1,
    flexDirection: 'row',
    gap: 24,
    marginTop: 8,
    paddingHorizontal: 12,
  },
  FTIcon: {
    flex: 1,
    color: COLORS.primaryColor,
    padding: 12,
  },
  FTContent: {
    flex: 3,
  },
  FTTiltle: {
    fontWeight: '700',
    fontSize: 16,
    color: '#222',
  },
  FTDesc: {},
});
