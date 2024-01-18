import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {globalStyles} from '../../../styles/GlobalStyles';

const FarmerActionsListCard = ({navigation, handlePress, title, desc}: any) => {
  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <Text style={globalStyles.titleText}>{title}</Text>
      <Text style={globalStyles.lightText}>{desc}</Text>
    </TouchableOpacity>
  );
};

export default FarmerActionsListCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    borderColor: '#eee',
    borderWidth: 2,
    borderRadius: 8,
    padding: 12,
    gap: 12,
  },
});
