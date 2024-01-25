import {StyleSheet} from 'react-native';
import {COLORS} from '../constants/colors';

export const globalStyles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.backgroundColor,
    flex: 1,
  },

  heading: {
    textAlign: 'center',
    fontSize: 24,
    color: '#222',
    fontWeight: '800',
    marginVertical: 12,
    letterSpacing: 2,
  },
  titleText: {
    fontSize: 16,
    color: '#222',
    fontWeight: '800',
  },
  lightText: {
    fontSize: 14,
    color: '#555555',
    fontWeight: '400',
  },
  anchorText: {
    color: 'blue',
  },
  boldText: {
    fontWeight: '800',
    color: '#222',
  },
  backIcon: {
    color: COLORS.white,
    margin: 8,
  },
  white: {
    color: COLORS.white,
  },
  buttonStyles: {
    backgroundColor: COLORS.primaryColor,
    paddingHorizontal: 32,
    paddingVertical: 24,
    fontWeight: '600',
    color: '#fff',
    borderRadius: 24,
    alignSelf: 'stretch',
    alignItems: 'center',
    marginVertical: 8,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    elevation: 2,
    padding: 18,
  },
});
