import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  GestureResponderEvent,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {colors as themeColoros} from '@/theme/colors';
import {spacing} from '@/theme/spacing';

interface GradientButtonProps {
  title: string;
  onPress?: (event: GestureResponderEvent) => void;
  colors?: string[];
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  start?: {x: number; y: number};
  end?: {x: number; y: number};
  locations?: number[];
}

const GradientButton: React.FC<GradientButtonProps> = ({
  title,
  onPress,
  colors = [
    themeColoros.primary,
    themeColoros.secondary,
    themeColoros.tertiary,
  ],
  disabled = false,
  style,
  textStyle,
  start = {x: 0.5, y: 0},
  end = {x: 0.5, y: 1},
  locations = [0, 0.73, 1],
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={!disabled ? onPress : undefined}
      activeOpacity={disabled ? 1 : 0.8}>
      <LinearGradient
        colors={disabled ? ['#E0E0E0', '#E0E0E0'] : colors}
        start={start}
        end={end}
        style={styles.gradient}
        locations={locations}>
        <Text
          style={[styles.text, disabled ? styles.disabledText : {}, textStyle]}>
          {title}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default GradientButton;
const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    overflow: 'hidden',
  },
  gradient: {
    padding: spacing[3],
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    color: themeColoros.white,
    letterSpacing: 0.9,
  },
  disabledText: {
    color: themeColoros.gray,
  },
});
