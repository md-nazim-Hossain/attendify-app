import {colors} from '@/theme/colors';
import {spacing} from '@/theme/spacing';
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

type ButtonVariants =
  | 'primary'
  | 'secondary'
  | 'danger'
  | 'disabled'
  | 'outline'
  | 'transparent';

interface ButtonProps {
  title: string;
  onPress?: (event: GestureResponderEvent) => void;
  variant?: ButtonVariants;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = 'primary',
  disabled = false,
  style,
  textStyle,
}) => {
  const variantStyles = styles[variant];
  return (
    <TouchableOpacity
      style={[styles.base, variantStyles, disabled && {opacity: 0.6}, style]}
      onPress={!disabled ? onPress : undefined}
      activeOpacity={disabled ? 0.6 : 0.9}>
      <Text style={[styles.text, styles[`${variant}Text`], textStyle]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
const styles = StyleSheet.create({
  base: {
    borderRadius: spacing[1] + 1,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    width: 102,
    height: 34,
  },
  primary: {
    backgroundColor: colors['primary-light'],
    borderColor: colors['primary-light'],
  },
  secondary: {
    backgroundColor: 'transparent',
    borderColor: colors['gray-dark'],
  },
  danger: {
    backgroundColor: '#DC3545',
  },
  disabled: {
    backgroundColor: '#E0E0E0',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 20,
  },
  primaryText: {
    color: colors.white,
  },
  secondaryText: {
    color: colors['gray-dark'],
  },
  dangerText: {
    color: '#FFFFFF',
  },
  disabledText: {
    color: '#A0A0A0',
  },
  outline: {
    borderColor: colors['primary-light'],
    backgroundColor: 'transparent',
  },
  outlineText: {
    color: colors['primary-light'],
  },
  transparent: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    fontSize: 14,
    width: 'auto',
    paddingHorizontal: spacing[2],
  },
  transparentText: {
    color: colors['light-navy-blue'],
  },
});
