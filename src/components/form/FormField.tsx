import {
  StyleSheet,
  TextInputProps,
  TextProps,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {Controller, UseFormReturn} from 'react-hook-form';
import {colors} from '@/theme/colors';
import {spacing} from '@/theme/spacing';
import TextInput from '../textInput/TextInput';
import Text from '../text/Text';
import {StyleProp} from 'react-native';

type Props = {
  name: string;
  style?: TextProps['style'];
  form: UseFormReturn<any, any, undefined>;
  Icon?: React.ReactNode;
  errorStyle?: TextProps['style'];
  containerStyle?: StyleProp<ViewStyle>;
  variant?: 'editable' | 'outline' | 'filled';
  [key: string]: TextInputProps | any;
};
const FormField = ({name, form, errorStyle, variant, ...rest}: Props) => {
  const {errors} = form.formState;
  return (
    <View style={styles.container}>
      <Controller
        control={form.control}
        name={name}
        render={({field: {onChange, value, onBlur}}) => (
          <TextInput
            variant={variant}
            onChangeText={onChange}
            value={value}
            onBlur={onBlur}
            {...rest}
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
    marginBottom: spacing[1] + 2,
  },
  error: {
    color: colors.error,
    fontWeight: 600,
    marginTop: spacing[1],
  },
});
