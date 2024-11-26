import {StyleSheet, View} from 'react-native';
import React from 'react';
import {colors} from '@/theme/colors';
import {spacing} from '@/theme/spacing';
import {TouchableOpacity} from 'react-native';
import Text from '@/components/text/Text';

type Props = {
  onPressOtherButton: () => void;
};
const PredifientBreak = ({onPressOtherButton}: Props) => {
  return (
    <View>
      <TouchableOpacity activeOpacity={0.9} style={styles.buttonStyle}>
        <Text preset="h3" style={styles.buttonText}>
          Lunch/Dinner
        </Text>
        <Text preset="small">For 45 min</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.9} style={styles.buttonStyle}>
        <Text preset="h3" style={styles.buttonText}>
          Tea
        </Text>
        <Text preset="small">For 10 min</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onPressOtherButton}
        activeOpacity={0.9}
        style={styles.buttonStyle}>
        <Text preset="h3" style={styles.buttonText}>
          Other
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default PredifientBreak;

const styles = StyleSheet.create({
  buttonStyle: {
    height: 65,
    borderRadius: 3,
    backgroundColor: colors['light-navy-blue'],
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing[4] - 1,
  },
  buttonText: {
    fontWeight: 700,
    letterSpacing: 1.7,
    textAlign: 'center',
  },
});
