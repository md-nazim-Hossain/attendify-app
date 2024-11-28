import {Image, Platform, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Animated, {
  Extrapolation,
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {applyOpacity} from '@/utils/applyOpacity';
import {colors} from '@/theme/colors';
import Text from '../text/Text';
import {spacing} from '@/theme/spacing';
import {typography} from '@/theme/typography';

type Props = {
  item: number;
  index: number;
  scrollX: SharedValue<number>;
  isLast: boolean;
  onPress: () => void;
  isActive: boolean;
};
const SliderItem = ({
  //   item,
  index,
  scrollX,
  isLast,
  onPress,
  isActive,
}: Props) => {
  const rnAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: interpolate(
            scrollX.value,
            [(index - 1) * 60, index * 60, (index + 1) * 60],
            [0, 0, 0],
            Extrapolation.CLAMP,
          ),
        },
      ],
    };
  });
  return (
    <Animated.View
      style={[
        styles.container,
        rnAnimatedStyle,
        index === 0 && {marginLeft: spacing[7]},
        isLast && {marginRight: spacing[7]},
      ]}>
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.9}
        style={[styles.itemWidth, isActive && styles.activeItemWidth]}>
        <Image
          style={styles.image}
          source={require('@/assets/images/girl.png')}
        />
      </TouchableOpacity>
      <Text
        style={[
          styles.text,
          isActive ? styles.activeTextColor : styles.inactiveTextColor,
        ]}>
        Nazim
      </Text>
    </Animated.View>
  );
};

export default SliderItem;

const styles = StyleSheet.create({
  container: {
    width: 60,
    marginLeft: spacing[2],
  },
  itemWidth: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    backgroundColor: applyOpacity(colors['medium-navy-blue'], 0.15),
    position: 'relative',
    borderWidth: 1,
    borderColor: colors.white,
    opacity: 0.5,
  },

  activeItemWidth: {
    opacity: 1,
    borderColor: colors.black,
    ...(Platform.OS === 'ios' && {
      shadowColor: colors['primary-light'],
      shadowOffset: {width: 0, height: 4},
      shadowOpacity: 4,
      shadowRadius: 30,
    }),
    elevation: 15,
  },

  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  text: {
    fontFamily: typography.primaryBold,
    fontWeight: 800,
    fontSize: 11,
    textAlign: 'center',
    marginTop: spacing[1],
  },
  activeTextColor: {
    color: applyOpacity(colors['dark-navy-blue'], 0.8),
  },
  inactiveTextColor: {
    color: applyOpacity(colors.gray, 0.7),
  },
});
