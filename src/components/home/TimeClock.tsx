import {StyleSheet, View} from 'react-native';
import React from 'react';
import {spacing} from '@/theme/spacing';
import {colors} from '@/theme/colors';
import Text from '../text/Text';
import {applyOpacity} from '@/utils/applyOpacity';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import TimeDisplay from './TimeDisplay';

const TimeClock = () => {
  return (
    <View style={styles.container}>
      <View style={styles.waterMark} />
      <View style={styles.contentContainer}>
        <Text preset="small" style={styles.text}>
          Current Location
        </Text>
        <View style={styles.locationContainer}>
          <MaterialCommunityIcons
            name="map-marker-outline"
            size={14}
            color={colors.white}
          />
          <Text preset="small" style={styles.text}>
            Dhaka
          </Text>
          <MaterialCommunityIcons
            name="pencil"
            size={12}
            color={colors.white}
          />
        </View>
      </View>
      <TimeDisplay />
      <View style={styles.footerContainer}>
        <Text preset="small" style={styles.text}>
          Total work hours today
        </Text>
        <TimeDisplay style={{width: 20}} preset="small" />
      </View>
    </View>
  );
};

export default TimeClock;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 157,
    borderRadius: spacing[2],
    borderWidth: 1,
    borderColor: colors.black,
    backgroundColor: colors['extra-dark-navy-blue'],
    marginVertical: spacing[6],
    position: 'relative',
    overflow: 'hidden',
    justifyContent: 'space-between',
  },
  waterMark: {
    width: 70,
    height: '200%',
    backgroundColor: applyOpacity('#394455', 1),
    transform: [{rotate: '-30deg'}],
    position: 'absolute',
    top: -spacing[10],
    left: '50%',
  },

  contentContainer: {
    paddingHorizontal: spacing[5],
    paddingVertical: spacing[2],
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[1],
  },

  text: {
    fontWeight: 600,
    letterSpacing: 1.3,
  },

  footerContainer: {
    width: '100%',
    justifyContent: 'space-between',
    backgroundColor: '#202B3E',
    paddingVertical: spacing[3] - 2,
    paddingHorizontal: spacing[5],
    flexDirection: 'row',
  },
});
