import {spacing} from '@/theme/spacing';
import React, {forwardRef, useCallback} from 'react';
import {TouchableOpacity, Animated, View, StyleSheet} from 'react-native';

type Props = {
  onPress: (index: number) => void;
  index: number;
  opacity: Animated.AnimatedInterpolation<any>;
  ref: React.RefObject<any>;
  children: React.ReactNode;
};

const TabBarItem = forwardRef<any, Props>((props, ref) => {
  const handlePress = useCallback(() => {
    props.onPress(props.index);
  }, [props]);

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <View style={styles.text} ref={ref}>
        <Animated.Text style={[styles.animatedText, {opacity: props.opacity}]}>
          {props.children}
        </Animated.Text>
      </View>
    </TouchableOpacity>
  );
});
TabBarItem.displayName = 'TabBarItem';

export default TabBarItem;
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing[4],
    paddingTop: spacing[4],
    alignItems: 'center',
  },
  text: {
    paddingBottom: spacing[1],
  },
  animatedText: {
    color: 'white',
    fontSize: 16,
  },
});
