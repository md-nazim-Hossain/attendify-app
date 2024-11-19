import {Text as RNText, TextProps, StyleSheet} from 'react-native';
import {presets} from './text.preset';

export type Props = TextProps & {
  preset?: keyof typeof presets;
};

function Text({preset = 'default', style, ...rest}: Props) {
  const textStyle = StyleSheet.compose(presets[preset], style);
  return <RNText style={textStyle} {...rest} />;
}

export default Text;
