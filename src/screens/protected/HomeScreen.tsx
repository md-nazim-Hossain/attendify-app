import {View, StyleSheet, ActivityIndicator} from 'react-native';
import React from 'react';
// import CheckIn from '@/components/home/CheckIn';
import CheckOut from '@/components/home/CheckOut';
// import {useFetch} from '@/utils/reactQuery';

const HomeScreen = () => {
  // const {data, isLoading} = useFetch('/posts/1');
  // if (isLoading) {
  //   return <ActivityIndicator size={'large'} />;
  // }
  // console.log(data);
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
  },
});
