import {KeyboardTypeOptions, StyleSheet, TextProps, View} from 'react-native';
import React from 'react';
import {Controller, UseFormReturn} from 'react-hook-form';
import {colors} from '@/theme/colors';
import {spacing} from '@/theme/spacing';
import {applyOpacity} from '@/utils/applyOpacity';
import TextInput from '../textInput/TextInput';
import Text from '../text/Text';

type Props = {
  name: string;
  placeHolder?: string;
  style?: TextProps['style'];
  type?: KeyboardTypeOptions;
  form: UseFormReturn<any, any, undefined>;
  isSecure?: boolean;
  withIcon?: boolean;
  Icon?: React.ReactNode;
};
const FormField = ({
  name,
  placeHolder,
  style,
  type,
  form,
  isSecure,
  Icon,
}: Props) => {
  const {errors} = form.formState;
  return (
    <View>
      <Controller
        control={form.control}
        name={name}
        render={({field: {onChange, value, onBlur}}) => (
          <TextInput
            onBlur={onBlur}
            style={style}
            onChangeText={onChange}
            value={value}
            placeholder={placeHolder ?? 'Enter value'}
            keyboardType={type ?? 'default'}
            secureTextEntry={isSecure || false}
            placeholderTextColor={applyOpacity(colors.white, 0.8)}
            Icon={Icon}
          />
        )}
      />
      {errors[name] && (
        <Text preset="small" style={styles.error}>
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
