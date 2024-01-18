import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome6';
import CustomButton from '../../components/CustomButton';
import {COLORS} from '../../constants/colors';

const Subscribe = ({navigation}: any) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.plansContainer}>
        <View style={styles.darkBg}>
          <Text style={styles.headerText}>Let's get started</Text>
          <Text style={styles.heading}>How your free trial works</Text>
          <Text style={{color: 'white'}}>
            ⭐⭐⭐⭐⭐ 4.8 on App store (21k reviews)
          </Text>
        </View>
        <View style={styles.lightBg}>
          <View style={styles.card}>
            <View style={styles.progressBar}>
              <Icon style={styles.barIcon} name="lock" size={22} />
              <Icon style={styles.barIcon} name="bell" size={22} />
              <Icon style={styles.barIcon} name="star" size={22} />
            </View>
            <View style={styles.cardContent}>
              <Text style={styles.subHeading}>Today</Text>
              <Text>
                Get instant access and see how Buddy can improve your financial
                life.
              </Text>

              <Text style={styles.subHeading}>Day 5</Text>
              <Text>
                We'll remind you with a notification the your trial is ending
                soon.
              </Text>

              <Text style={styles.subHeading}>Day 7</Text>
              <Text>
                Your Subscription starts. Cancel before that to avoid payments.
              </Text>
            </View>
          </View>

          <Text style={styles.subHeading}>
            7 days free, then $71.98/year (57% off)
          </Text>
          <Text> That's only $1.38/ week, billed annually</Text>
          <View>
            <View style={styles.toolTip}>
              <Icon name="circle-check" size={18} style={{color: 'green'}} />
              <Text>Secured by Apple</Text>
            </View>
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate('Products')}
            style={{
              padding: 16,
              width: '100%',
              alignItems: 'center',
              backgroundColor: COLORS.primaryColor,
              borderRadius: 50,
            }}>
            <Text style={{color: 'white'}}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Subscribe;

const styles = StyleSheet.create({
  plansContainer: {
    position: 'relative',
    flex: 1,
  },
  darkBg: {
    flex: 2,
    backgroundColor: COLORS.primaryColor,
    padding: 12,
  },
  lightBg: {
    flex: 3,
    backgroundColor: '#F5F5FA',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 12,
  },
  card: {
    // position: 'absolute',
    // top: '30%',
    elevation: 2,
    backgroundColor: '#fff',
    zIndex: 5,
    padding: 12,
    alignSelf: 'center',
    flexDirection: 'row',
    marginTop: -100,
    gap: 12,
    borderRadius: 12,
  },
  progressBar: {
    flex: 1,
    borderRadius: 20,
    backgroundColor: COLORS.primaryColor,
    height: 300,
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 8,
  },
  cardContent: {
    flex: 10,
  },
  barIcon: {
    marginBottom: 53,
    color: '#eee',
  },
  headerText: {
    color: '#cfffc9',
    fontSize: 18,
    fontWeight: '700',
  },
  heading: {
    fontSize: 32,
    maxWidth: '80%',
    color: '#fff',
    fontWeight: '800',
  },

  subHeading: {
    fontSize: 16,
    color: '#222',
    fontWeight: '800',
    marginTop: 12,
  },
  toolTip: {
    borderWidth: 1,
    borderRadius: 50,
    backgroundColor: '#F5F5FA',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 8,
    borderColor: '#bbb',
    color: '#666',
    textAlign: 'center',
    padding: 8,
    marginVertical: 12,
  },
});
