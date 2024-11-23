import {View} from 'react-native';
import React from 'react';
import MyRequest from '@/components/MyRequest';
import {StyleSheet} from 'react-native';
import {spacing} from '@/theme/spacing';
import {colors} from '@/theme/colors';
import GradientButton from '@/components/button/GradientButton';

const MyRequestScreen = () => {
  return (
    <View style={styles.container}>
      <MyRequest />

      <GradientButton title="+ Add leave request" />
    </View>
  );
};

export default MyRequestScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing[3],
    backgroundColor: colors.white,
  },
});
