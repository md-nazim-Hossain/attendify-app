import {KeyboardTypeOptions, StyleSheet, TextProps, View} from 'react-native';
import React from 'react';
import {Controller, UseFormReturn} from 'react-hook-form';
import {colors} from '@/theme/colors';
import {spacing} from '@/theme/spacing';
import {applyOpacity} from '@/utils/applyOpacity';
import TextInput from '../textInput/TextInput';
import Text from '../text/Text';
import {presets} from '../textInput/text-input-preset';

type Props = {
  name: string;
  placeHolder?: string;
  style?: TextProps['style'];
  type?: KeyboardTypeOptions;
  form: UseFormReturn<any, any, undefined>;
  isSecure?: boolean;
  withIcon?: boolean;
  Icon?: React.ReactNode;
  preset?: keyof typeof presets;
  placeholderTextColor?: string;
  errorStyle?: TextProps['style'];
};
const FormField = ({
  name,
  placeHolder,
  style,
  type,
  form,
  isSecure,
  Icon,
  preset,
  placeholderTextColor = applyOpacity(colors.white, 0.8),
  errorStyle,
}: Props) => {
  const {errors} = form.formState;
  return (
    <View>
      <Controller
        control={form.control}
        name={name}
        render={({field: {onChange, value, onBlur}}) => (
          <TextInput
            preset={preset}
            onBlur={onBlur}
            style={style}
            onChangeText={onChange}
            value={value}
            placeholder={placeHolder ?? 'Enter value'}
            keyboardType={type ?? 'default'}
            secureTextEntry={isSecure || false}
            placeholderTextColor={placeholderTextColor}
            Icon={Icon}
          />
        )}
      />
      {errors[name] && (
        <Text preset="small" style={[styles.error, errorStyle]}>
          {errors[name]?.message as string}
        </Text>
      )}
    </View>
  );
};

export default FormField;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    gap: spacing[1] - 2,
    borderWidth: 1,
    borderColor: colors.error,
  },
  error: {
    color: colors.error,
    fontWeight: 600,
  },
});
