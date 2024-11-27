import {
  TextInput as RNTextInput,
  TextInputProps,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import React, {ReactNode} from 'react';
import {View} from 'react-native';
import {StyleProp} from 'react-native';
import {colors} from '@/theme/colors';
import {spacing} from '@/theme/spacing';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableOpacity} from 'react-native';

export type Props = TextInputProps & {
  variant?: 'editable' | 'outline' | 'filled';
  withIcon?: boolean;
  Icon?: ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
  isSecure?: boolean;
};
const TextInput = ({
  style,
  Icon,
  containerStyle,
  secureTextEntry,
  variant = 'outline',
  placeholder = 'Enter value',
  placeholderTextColor,
  value,
  onChangeText,
  ...rest
}: Props) => {
  const [showPassword, setShowPassword] = React.useState(secureTextEntry);
  const [isEditble, setIsEditable] = React.useState(variant !== 'editable');
  const [text, setText] = React.useState<string>(value || '');
  let placeHolderTextColor = placeholderTextColor
    ? placeholderTextColor
    : variant === 'editable'
    ? colors['muted-foreground']
    : variant === 'outline'
    ? colors.white
    : colors['light-navy-blue'];

  return (
    <View style={[styles.baseContainerStyle, styles[variant], containerStyle]}>
      {Icon && Icon}
      <RNTextInput
        secureTextEntry={showPassword}
        style={[styles.textInputBaseStyle, styles[`${variant}Text`], style]}
        placeholder={placeholder}
        placeholderTextColor={placeHolderTextColor}
        editable={isEditble}
        value={text}
        onChangeText={inputText => {
          setText(inputText);
          onChangeText && onChangeText(inputText);
        }}
        {...rest}
      />
      {secureTextEntry && (
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => setShowPassword(!showPassword)}>
          {showPassword ? (
            <MaterialCommunityIcons
              name="eye-off"
              size={24}
              color={colors.white}
            />
          ) : (
            <MaterialCommunityIcons name="eye" size={24} color={colors.white} />
          )}
        </TouchableOpacity>
      )}
      {variant === 'editable' && (
        <View style={styles.editableIconContainer}>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => setIsEditable(!isEditble)}>
            {!isEditble ? (
              <MaterialCommunityIcons
                name="pencil"
                size={24}
                color={colors['muted-foreground']}
              />
            ) : (
              <MaterialCommunityIcons
                name="check-bold"
                size={24}
                color={colors['muted-foreground']}
              />
            )}
          </TouchableOpacity>
          {isEditble && (
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => {
                setIsEditable(false);
                setText('');
              }}>
              <MaterialCommunityIcons
                name="close"
                size={24}
                color={colors['muted-foreground']}
              />
            </TouchableOpacity>
          )}
        </View>
      )}
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  baseContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInputBaseStyle: {
    flex: 1,
    fontSize: 14,
    fontWeight: 600,
    paddingHorizontal: spacing[3],
    height: 42,
  },
  editable: {
    borderBottomWidth: 3,
    borderBottomColor: colors['light-gray'],
    borderColor: colors['light-gray'],
    paddingHorizontal: spacing[8],
  },
  editableText: {
    color: colors['muted-foreground'],
  },
  editableIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[1],
  },
  outline: {
    borderBottomWidth: 3,
    borderColor: colors.white,
    backgroundColor: 'transparent',
  },
  outlineText: {
    color: colors.white,
  },
  filled: {
    borderWidth: 1,
    borderColor: colors['light-navy-blue'],
    borderRadius: 3,
  },
  filledText: {
    color: colors['light-navy-blue'],
    lineHeight: 24,
  },
});
