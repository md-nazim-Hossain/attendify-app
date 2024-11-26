import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {spacing} from '@/theme/spacing';
import Text from '@/components/text/Text';
import {typography} from '@/theme/typography';
import {colors} from '@/theme/colors';

const TakeBreakScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.backgroundImage}
        source={require('@/assets/images/break-1.png')}
      />
      <View style={styles.contentContainer}>
        <Text preset="h2" style={styles.title}>
          Let’s take a break
        </Text>
        <TouchableOpacity activeOpacity={0.9} style={styles.buttonStyle}>
          <Text preset="h3" style={styles.buttonText}>
            Lunch/Dinner
          </Text>
          <Text preset="small">For 45 min</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.9} style={styles.buttonStyle}>
          <Text preset="h3" style={styles.buttonText}>
            Tea
          </Text>
          <Text preset="small">For 10 min</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.9} style={styles.buttonStyle}>
          <Text preset="h3" style={styles.buttonText}>
            Other
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TakeBreakScreen;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: '100%',
    width: '100%',
  },
  contentContainer: {
    paddingHorizontal: spacing[7] - 2,
    paddingVertical: spacing[12] - 2,
  },
  backgroundImage: {
    resizeMode: 'cover',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
  },
  title: {
    fontFamily: typography.jua,
    color: colors['secondary-foreground'],
    letterSpacing: 1.5,
    textAlign: 'center',
    marginBottom: spacing[4] + 2,
    fontWeight: 500,
  },
  buttonStyle: {
    height: 65,
    borderRadius: 3,
    backgroundColor: colors['light-navy-blue'],
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing[4] - 1,
  },
  buttonText: {
    fontWeight: 700,
    letterSpacing: 1.7,
    textAlign: 'center',
  },
});
