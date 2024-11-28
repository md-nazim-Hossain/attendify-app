import {StyleSheet, View} from 'react-native';
import React from 'react';
import {colors} from '@/theme/colors';
import {formatDate, formatTime} from '@/utils/timeFormatter';
import Text from '../text/Text';
import {typography} from '@/theme/typography';
import CheckInOutButton from '../button/CheckInOutButton';
import {spacing} from '@/theme/spacing';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {applyOpacity} from '@/utils/applyOpacity';
import LocationMap from './LocationMap';

const CheckIn = () => {
  return (
    <View style={styles.container}>
      <View style={styles.paddingHorizontal}>
        <Text preset="h2" style={styles.title}>
          Welcome To Attendify!
        </Text>
        <Text preset="h1" style={[styles.title, {fontSize: 25}]}>
          {formatTime(new Date())}
        </Text>
        <Text preset="h5" style={styles.date}>
          {formatDate(new Date())}
        </Text>
      </View>
      <View style={[styles.locationParentContainer, styles.paddingHorizontal]}>
        <CheckInOutButton title="Check In" />
        <View style={styles.locationContainer}>
          <MaterialCommunityIcons
            name="map-marker-outline"
            size={24}
            color={colors.gray}
          />
          <Text preset="h3" style={styles.text}>
            Location:Dhaka
          </Text>
        </View>
        <View style={styles.alermClockContainer}>
          <CheckInOutButton
            imageStyle={styles.imageStyle}
            outerShadow={false}
            gradientStyle={styles.alermClockGradientStyle}
            colors={[applyOpacity('#8D1D67', 0.8), '#403684']}
            locations={[0, 1]}
            end={{x: 2, y: 0.5}}
            start={{x: 0.5, y: 1.5}}
            source={require('@/assets/images/alerm.png')}
          />
        </View>
      </View>
      <LocationMap />
    </View>
  );
};

export default CheckIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: spacing[8],
  },
  paddingHorizontal: {
    paddingHorizontal: spacing[8],
  },
  title: {
    color: colors['secondary-foreground'],
    letterSpacing: 20 * 0.06,
    textAlign: 'center',
    fontWeight: 900,
  },
  date: {
    color: colors.gray,
    textAlign: 'center',
    fontWeight: 800,
    fontFamily: typography.primaryExtraBold,
  },
  button: {
    width: 180,
    height: 180,
    borderRadius: 180 / 2,
  },
  locationParentContainer: {
    position: 'relative',
    marginBottom: spacing[14],
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing[1],
  },
  text: {
    fontFamily: typography.primaryExtraBold,
    fontWeight: 900,
    color: colors.gray,
    letterSpacing: 1.5,
  },
  alermClockContainer: {
    position: 'absolute',
    right: spacing[8],
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
