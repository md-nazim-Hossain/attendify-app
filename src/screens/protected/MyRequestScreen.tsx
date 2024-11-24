import {View} from 'react-native';
import React from 'react';
import MyRequest from '@/components/MyRequest';
import {StyleSheet} from 'react-native';
import {spacing} from '@/theme/spacing';
import {colors} from '@/theme/colors';
import GradientButton from '@/components/button/GradientButton';
import {useAuth} from '@/navigations/AuthProvider';

const MyRequestScreen = () => {
  const {isAdmin} = useAuth();
  return (
    <View style={styles.container}>
      <View>
        <MyRequest />
      </View>
      {!isAdmin && <GradientButton title="+ Add leave request" />}
    </View>
  );
};

export default MyRequestScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: spacing[3],
    backgroundColor: colors.white,
  },
});
