import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import {spacing} from '@/theme/spacing';
import Company from '@/components/company/Company';
import Text from '@/components/text/Text';
import {colors} from '@/theme/colors';

const MyCompaniesScreen = () => {
  const companies = [
    {
      _id: 1,
      logo: require('@/assets/images/profile.png'),
      name: 'Company Name',
      createdAt: new Date().toString(),
      address: 'Dhaka, Bangladesh',
    },
    {
      _id: 2,
      logo: require('@/assets/images/profile.png'),
      name: 'Company Name 2',
      createdAt: new Date().toString(),
      address: 'Chittagong, Bangladesh',
    },
    {
      _id: 3,
      logo: require('@/assets/images/profile.png'),
      name: 'Company Name 3',
      createdAt: new Date().toString(),
      address: 'Cumilla, Bangladesh',
    },
    {
      _id: 4,
      logo: require('@/assets/images/profile.png'),
      name: 'Company Name 3',
      createdAt: new Date().toString(),
      address: 'Cumilla, Bangladesh',
    },
    {
      _id: 5,
      logo: require('@/assets/images/profile.png'),
      name: 'Company Name 3',
      createdAt: new Date().toString(),
      address: 'Cumilla, Bangladesh',
    },
    {
      _id: 6,
      logo: require('@/assets/images/profile.png'),
      name: 'Company Name 3',
      createdAt: new Date().toString(),
      address: 'Cumilla, Bangladesh',
    },
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.text} preset="h2">
        My Companies
      </Text>
      <FlatList
        data={companies}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item._id.toString()}
        renderItem={({item, index}) => <Company {...item} key={index} />}
      />
    </View>
  );
};

export default MyCompaniesScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing[5],
    flex: 1,
  },
  text: {
    color: colors.black,
    letterSpacing: 20 * 0.06,
    textAlign: 'center',
    paddingVertical: spacing[2],
    fontFamily: 'Jua-Regular',
    fontWeight: 900,
    fontSize: 24,
  },
});
