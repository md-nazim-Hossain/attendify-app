import {View, StyleSheet} from 'react-native';
import React from 'react';
import {spacing} from '@/theme/spacing';
// import CheckIn from '@/components/home/CheckIn';
import CheckOut from '@/components/home/CheckOut';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* <CheckIn /> */}
      <CheckOut />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing[8],
  },
});
