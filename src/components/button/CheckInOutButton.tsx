import {Image, StyleSheet, TextStyle, View, ViewStyle} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {colors as themeColors} from '@/theme/colors';
import {typography} from '@/theme/typography';
import Text from '../text/Text';
import {applyOpacity} from '@/utils/applyOpacity';
import {spacing} from '@/theme/spacing';
import {ImageSourcePropType} from 'react-native';

type CheckInOutButtonProps = {
  title?: string;
  colors?: string[];
  start?: {x: number; y: number};
  end?: {x: number; y: number};
  gradientStyle?: ViewStyle;
  locations?: number[];
  textStyle?: TextStyle;
  outerShadow?: boolean;
  disabled?: boolean;
  onPress?: () => void;
  source?: ImageSourcePropType;
  imageStyle?: ViewStyle;
};

const CheckInOutButton = ({
  colors = [
    themeColors['dark-navy-blue'],
    applyOpacity(themeColors['dark-navy-blue'], 0.64),
  ],
  end = {x: 0.5, y: 0},
  gradientStyle,
  locations = [0, 0.6],
  start = {x: 0, y: 0.5},
  textStyle,
  title,
  outerShadow = true,
  disabled = false,
  onPress,
  source = require('@/assets/images/hand.png'),
  imageStyle,
}: CheckInOutButtonProps) => {
  return (
    <View style={styles.parentContainer}>
      <View style={outerShadow && styles.container}>
        {outerShadow && (
          <Image
            style={styles.containerImage}
            source={
              title === 'Check In'
                ? require('@/assets/images/shadow.png')
                : require('@/assets/images/shadow-2.png')
            }
          />
        )}
        <TouchableOpacity
          onPress={onPress}
          disabled={disabled}
          activeOpacity={0.9}>
          <LinearGradient
            colors={colors}
            start={start}
            end={end}
            style={[styles.gradient, gradientStyle]}
            locations={locations}>
            <View style={[styles.imageContainer, imageStyle]}>
              <Image style={styles.image} source={source} />
            </View>
            {title && <Text style={[styles.text, textStyle]}>{title}</Text>}
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CheckInOutButton;

const styles = StyleSheet.create({
  parentContainer: {
    alignItems: 'center',
  },
  container: {
    width: 215,
    height: 215,
    borderRadius: 215 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  containerImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
    inset: 0,
    transform: [{scale: 1.15}],
  },
  gradient: {
    width: 180,
    height: 180,
    borderRadius: 180 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    width: 65,
    height: 85,
    padding: spacing[1] - 2,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },

  text: {
    fontSize: 15,
    fontWeight: 'bold',
    color: themeColors.white,
    fontFamily: typography.primaryBold,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    marginTop: spacing[1],
  },
});
