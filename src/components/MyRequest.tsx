import {Image, Platform, StyleSheet, View} from 'react-native';
import React from 'react';
import {spacing} from '@/theme/spacing';
import {colors} from '@/theme/colors';
import Text from './text/Text';
import Badge from './Badge';

const MyRequest = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text preset="h4" style={styles.text}>
          Going for trip
        </Text>
        <Badge status="Approved" />
      </View>
      <View style={styles.contentContainer}>
        <Image
          source={require('@/assets/images/date-icon.png')}
          style={styles.dateIcon}
        />
        <View>
          <View style={styles.leaveContainer}>
            <Text preset="small" style={styles.leaveText}>
              Leave from :
            </Text>
            <Text preset="small" style={styles.leaveDate}>
              29 Jan - 05 Feb
            </Text>
          </View>
          <Text preset="xsmall" style={styles.smllText}>
            Requested on 19 Apr, 5:30pm
          </Text>
        </View>
      </View>
    </View>
  );
};

export default MyRequest;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    padding: spacing[5],
    borderRadius: 5,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.25,
        shadowRadius: 2,
      },
      android: {
        elevation: 2,
      },
    }),
    backgroundColor: colors.white,
  },
  header: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: spacing[4] - 2,
  },
  text: {
    color: colors['muted-foreground'],
    fontWeight: 700,
  },
  contentContainer: {
    flexDirection: 'row',
    gap: spacing[2],
  },
  dateIcon: {
    resizeMode: 'cover',
    width: 24,
    height: 24,
  },
  leaveContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[2] + 1,
  },
  leaveText: {
    color: colors.accent,
    fontWeight: 600,
  },
  leaveDate: {
    color: colors['muted-foreground'],
    fontWeight: 700,
  },
  smllText: {
    color: colors.accent,
    fontWeight: 500,
    marginTop: spacing[1],
  },
});
