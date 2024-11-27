import {View, StyleSheet} from 'react-native';
import {useLinkBuilder} from '@react-navigation/native';
import {PlatformPressable} from '@react-navigation/elements';
import * as React from 'react';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {spacing} from '@/theme/spacing';
import {colors} from '@/theme/colors';
import Text from '../text/Text';

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
              color: isFocused ? colors['light-navy-blue'] : colors.gray,
              size: 24,
              fontWeight: isFocused ? 700 : 300,
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
            style={styles.platform}>
            <View>{icon}</View>
            <Text
              preset="small"
              style={[
                {color: isFocused ? colors['dark-navy-blue'] : colors.gray},
                {fontWeight: isFocused ? 700 : 500},
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
    flexDirection: 'row',
  },
  platform: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing[1],
  },
});
