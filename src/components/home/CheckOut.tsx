import {StyleSheet, View} from 'react-native';
import React from 'react';
import CheckInOutButton from '../button/CheckInOutButton';
import Text from '../text/Text';
import {colors} from '@/theme/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {typography} from '@/theme/typography';
import {spacing} from '@/theme/spacing';
const CheckOut = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title} preset="h2">
        Time Clock
      </Text>
      <View style={styles.locationParentContainer}>
        <CheckInOutButton title="Check Out" colors={['#2A394D', '#405065']} />
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
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: colors.black,
    textAlign: 'center',
    fontWeight: 900,
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
    fontFamily: typography.primaryExtraBold,
    fontWeight: 900,
    color: colors.gray,
    letterSpacing: 1.5,
  },
  alermClockContainer: {
    position: 'absolute',
    right: -spacing[14],
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
