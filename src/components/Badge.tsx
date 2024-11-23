import {View, Text} from 'react-native';
import React from 'react';
import {StyleSheet} from 'react-native';
import {spacing} from '@/theme/spacing';
import {colors} from '@/theme/colors';
import {applyOpacity} from '@/utils/applyOpacity';

type Props = {
  variant?: 'success' | 'error';
  status: string;
};
const Badge = ({status, variant = 'success'}: Props) => {
  return (
    <View style={[styles.container, styles[variant]]}>
      <Text
        style={[
          styles.text,
          {color: variant === 'success' ? colors.sucess : colors.error},
        ]}>
        {status}
      </Text>
    </View>
  );
};

export default Badge;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing[2],
    paddingVertical: spacing[1] - 2,
    borderRadius: 3,
  },
  text: {
    fontWeight: 600,
    fontSize: 10,
  },
  success: {
    backgroundColor: applyOpacity(colors.sucess, 0.2),
  },
  error: {
    backgroundColor: applyOpacity(colors.error, 0.2),
  },
});
