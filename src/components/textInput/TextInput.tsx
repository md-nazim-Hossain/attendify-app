import {
  TextInput as RNTextInput,
  TextInputProps,
  StyleSheet,
} from 'react-native';
import React, {ReactNode} from 'react';
import {presets} from './text-input-preset';
import {View} from 'react-native';

export type Props = TextInputProps & {
  preset?: keyof typeof presets;
  withIcon?: boolean;
  Icon?: ReactNode;
};
const TextInput = ({preset = 'default', style, Icon, ...rest}: Props) => {
  const textInputStyle = StyleSheet.compose(presets[preset], style);
  if (!Icon) {
    return <RNTextInput style={textInputStyle} {...rest} />;
  }
  return (
    <View style={textInputStyle}>
      {Icon && Icon}
      <RNTextInput {...rest} />
    </View>
  );
};

export default TextInput;
