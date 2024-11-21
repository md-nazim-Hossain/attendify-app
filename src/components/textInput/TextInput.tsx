import {
  TextInput as RNTextInput,
  TextInputProps,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {presets} from './text-input-preset';

export type Props = TextInputProps & {
  preset?: keyof typeof presets;
};
const TextInput = ({preset = 'default', style, ...rest}: Props) => {
  const textInputStyle = StyleSheet.compose(presets[preset], style);
  return <RNTextInput style={textInputStyle} {...rest} />;
};

export default TextInput;
