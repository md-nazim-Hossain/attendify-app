import {View, StyleSheet} from 'react-native';
import {useLinkBuilder, useTheme} from '@react-navigation/native';
import {Text, PlatformPressable} from '@react-navigation/elements';
import * as React from 'react';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {spacing} from '@/theme/spacing';

function EmployeeTabBar({state, descriptors, navigation}: BottomTabBarProps) {
  const {colors} = useTheme();
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
            <Text
              style={[
                styles.text,
                {color: isFocused ? colors.primary : colors.text},
              ]}>
              {label as string}
            </Text>
          </PlatformPressable>
        );
      })}
    </View>
  );
}

export default EmployeeTabBar;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 1,
    padding: spacing[3],
  },
  platform: {
    flex: 1,
  },
  text: {
    borderWidth: 1,
    textAlign: 'center',
  },
});
