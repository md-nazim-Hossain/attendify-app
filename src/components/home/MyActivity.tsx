import {Platform, StyleSheet, View} from 'react-native';
import React from 'react';
import {colors} from '@/theme/colors';
import {spacing} from '@/theme/spacing';
import {applyOpacity} from '@/utils/applyOpacity';
import Text from '../text/Text';
import {typography} from '@/theme/typography';

const MyActivity = () => {
  return (
    <View style={[styles.container, styles.shadowBox]}>
      <Text style={styles.activityText}>My Day Activity</Text>
    </View>
  );
};

export default MyActivity;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: spacing[2],
    marginBottom: spacing[1] + 2,
    paddingVertical: spacing[4],
  },
  shadowBox: {
    ...(Platform.OS === 'ios' && {
      shadowColor: applyOpacity(colors.black, 0.25),
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.25,
      shadowRadius: spacing[2],
    }),
    ...(Platform.OS === 'android' && {
      elevation: 2,
    }),
  },
  activityText: {
    fontWeight: 600,
    color: colors.black,
    textAlign: 'center',
    fontFamily: typography.primarySemiBold,
  },
});
