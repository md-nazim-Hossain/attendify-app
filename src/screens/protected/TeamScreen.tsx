import {Image, View} from 'react-native';
import React from 'react';
import {colors} from '@/theme/colors';
import {StyleSheet} from 'react-native';
import Text from '@/components/text/Text';
import {spacing} from '@/theme/spacing';
import Button from '@/components/button/Button';
import {applyOpacity} from '@/utils/applyOpacity';
import {typography} from '@/theme/typography';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const TeamScreen = () => {
  return (
    <View style={styles.container}>
      <Text preset="h2" style={styles.title}>
        Team
      </Text>
      <View style={styles.contentContainer}>
        <View style={styles.employeeImageContainer}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={require('@/assets/images/girl.png')}
            />
          </View>
          <View>
            <Text preset="h5" style={styles.employeeName}>
              Nazim
            </Text>
            <Text preset="h4" style={styles.employeeDesignation}>
              Software Engineer
            </Text>
          </View>
        </View>
        <View style={styles.employeeDobContainer}>
          <MaterialCommunityIcons
            name="calendar-outline"
            size={24}
            color={colors.white}
          />
          <Text preset="h5" style={styles.employeeDob}>
            12 July 2000
          </Text>
        </View>
        <View style={styles.employeeDetailsContainer}>
          <View style={styles.detailsContainer}>
            <Text
              preset="h5"
              style={[styles.detailsText, {color: colors.accent}]}>
              Current site location:
            </Text>
            <Text
              preset="h5"
              style={[styles.detailsText, {color: colors['muted-foreground']}]}>
              Bangladesh
            </Text>
          </View>
          <View style={styles.detailsContainer}>
            <Text
              preset="h5"
              style={[styles.detailsText, {color: colors.accent}]}>
              Check-in:
            </Text>
            <Text
              preset="h5"
              style={[styles.detailsText, {color: colors['muted-foreground']}]}>
              09:00 AM
            </Text>
          </View>
          <View style={styles.detailsContainer}>
            <Text
              preset="h5"
              style={[styles.detailsText, {color: colors.accent}]}>
              Check-out:
            </Text>
            <Text
              preset="h5"
              style={[styles.detailsText, {color: colors['muted-foreground']}]}>
              12:00 PM
            </Text>
          </View>
          <View style={[styles.detailsContainer, {borderBottomWidth: 0}]}>
            <Text
              preset="h5"
              style={[styles.detailsText, {color: colors.accent}]}>
              Break:
            </Text>
            <Text
              preset="h5"
              style={[styles.detailsText, {color: colors['muted-foreground']}]}>
              Lunch
            </Text>
          </View>
        </View>
        <Button
          textStyle={{fontWeight: 600, color: colors['medium-navy-blue']}}
          variant="outline"
          style={styles.buttonStyle}
          title="Approve"
        />
      </View>
    </View>
  );
};

export default TeamScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: spacing[9],
    paddingHorizontal: spacing[7],
  },
  title: {
    color: colors['secondary-foreground'],
    letterSpacing: 20 * 0.08,
    fontWeight: 900,
    textAlign: 'center',
    marginBottom: spacing[8],
  },
  contentContainer: {
    alignItems: 'center',
  },
  buttonStyle: {
    borderWidth: 1,
    width: 154,
    height: 38,
    borderColor: colors['medium-navy-blue'],
  },
  imageContainer: {
    width: 90,
    height: 90,
    borderRadius: 90 / 2,
    backgroundColor: applyOpacity(colors['medium-navy-blue'], 0.15),
    borderWidth: 1,
    borderColor: colors.black,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  employeeImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: spacing[3],
  },
  employeeName: {
    color: colors['muted-foreground'],
    fontWeight: 800,
    textAlign: 'center',
    letterSpacing: 1.5,
  },
  employeeDesignation: {
    fontWeight: 500,
    color: colors['secondary-foreground'],
    fontFamily: typography.primary,
    letterSpacing: 1.7,
  },
  employeeDobContainer: {
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: applyOpacity(colors.primary, 0.95),
    width: '100%',
    height: 50,
    paddingHorizontal: spacing[3],
    marginBottom: spacing[8],
    marginTop: spacing[5],
    flexDirection: 'row',
    gap: spacing[3] - 2,
  },
  employeeDob: {
    color: colors.white,
    fontWeight: 600,
    fontFamily: typography.primarySemiBold,
    letterSpacing: 1.5,
  },

  employeeDetailsContainer: {
    width: '100%',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors['light-gray'],
    marginBottom: spacing[6],
  },
  detailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[2] + 1,
    paddingHorizontal: spacing[7],
    paddingVertical: spacing[4],
    borderBottomWidth: 1,
    borderBottomColor: colors['light-gray'],
  },
  detailsText: {
    fontFamily: typography.primaryMedium,
    fontWeight: 500,
    letterSpacing: 1.3,
  },
});
