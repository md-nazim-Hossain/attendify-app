import {StyleSheet, View} from 'react-native';
import React from 'react';
import {colors} from '@/theme/colors';
import {formatDate, formatTime} from '@/utils/timeFormatter';
import Text from '../text/Text';
import {typography} from '@/theme/typography';
import CheckInOutButton from '../button/CheckInOutButton';

const CheckIn = () => {
  return (
    <View style={styles.container}>
      <Text preset="h2" style={styles.title}>
        Welcome To Attendify!
      </Text>
      <Text preset="h1" style={[styles.title, {fontSize: 25}]}>
        {formatTime(new Date())}
      </Text>
      <Text preset="h5" style={styles.date}>
        {formatDate(new Date())}
      </Text>
      <CheckInOutButton title="Check In" />
    </View>
  );
};

export default CheckIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
});
