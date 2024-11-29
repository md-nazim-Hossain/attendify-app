import {StyleSheet, View, Alert} from 'react-native';
import React from 'react';
import CheckInOutButton from '../button/CheckInOutButton';
import Text from '../text/Text';
import {colors} from '@/theme/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {typography} from '@/theme/typography';
import {spacing} from '@/theme/spacing';
import TimeClock from './TimeClock';
import MyActivity from './MyActivity';
const CheckOut = () => {
  const showAlert = () => {
    Alert.alert('Are you sure you want to check-out?', '', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  };
  return (
    <View style={styles.container}>
      <View style={styles.clockContainer}>
        <Text style={styles.title} preset="h2">
          Time Clock
        </Text>
        <TimeClock />
      </View>
      <MyActivity />
      <View style={styles.locationParentContainer}>
        <CheckInOutButton
          onPress={showAlert}
          title="Check Out"
          colors={[colors['extra-dark-navy-blue'], '#405065']}
        />
        <View style={styles.locationContainer}>
          <MaterialCommunityIcons
            name="map-marker-outline"
            size={16}
            color={colors.gray}
          />
          <Text preset="h5" style={styles.text}>
            Location:Dhaka
          </Text>
        </View>
        <View style={styles.alermClockContainer}>
          <CheckInOutButton
            disabled
            imageStyle={styles.imageStyle}
            outerShadow={false}
            gradientStyle={styles.alermClockGradientStyle}
            colors={['#4D5B6F', '#626E80', '#6E7A8B']}
            locations={[0, 0.4, 1]}
            source={require('@/assets/images/alerm.png')}
          />
        </View>
      </View>
    </View>
  );
};

export default CheckOut;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: spacing[8],
  },
  clockContainer: {},
  title: {
    color: colors.black,
    textAlign: 'center',
    fontWeight: 900,
    fontFamily: typography.primaryExtraBold,
  },
  locationParentContainer: {
    position: 'relative',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing[1],
  },
  text: {
    fontFamily: typography.primaryBold,
    fontWeight: 700,
    color: colors.gray,
    letterSpacing: 1.5,
  },
  alermClockContainer: {
    position: 'absolute',
    right: 0,
    bottom: spacing[14],
  },
  alermClockGradientStyle: {
    width: 38,
    height: 38,
    borderRadius: 38 / 2,
  },
  imageStyle: {
    width: 24,
    height: 20,
  },
});
