import {View, StyleSheet, Platform} from 'react-native';
import {useLinkBuilder} from '@react-navigation/native';
import {PlatformPressable} from '@react-navigation/elements';
import * as React from 'react';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {colors} from '@/theme/colors';
import Text from '../text/Text';
import {typography} from '@/theme/typography';
import {applyOpacity} from '@/utils/applyOpacity';

function TabBar({state, descriptors, navigation}: BottomTabBarProps) {
  const {buildHref} = useLinkBuilder();

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const icon = options.tabBarIcon
          ? options.tabBarIcon({
              focused: isFocused,
            } as any)
          : null;

        return (
          <PlatformPressable
            key={route.key}
            href={buildHref(route.name, route.params)}
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={[styles.platform]}>
            <View>{icon}</View>
            <Text
              preset="small"
              style={[
                styles.labelStyle,
                {color: isFocused ? colors['dark-navy-blue'] : colors.gray},
              ]}>
              {label as string}
            </Text>
          </PlatformPressable>
        );
      })}
    </View>
  );
}

export default TabBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    ...(Platform.OS === 'ios' && {
      shadowColor: applyOpacity(colors.black, 0.29),
      shadowOffset: {width: 0, height: 4},
      shadowOpacity: 0.29,
      shadowRadius: 4,
    }),
    ...(Platform.OS === 'android' && {
      elevation: 4,
    }),
  },
  platform: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 62,
  },
  labelStyle: {
    fontFamily: typography.primaryExtraBold,
    fontWeight: 900,
    letterSpacing: 1,
    marginTop: 4,
  },
});
