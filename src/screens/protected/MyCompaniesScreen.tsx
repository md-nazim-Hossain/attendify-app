import {ActivityIndicator, FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import {spacing} from '@/theme/spacing';
import Company from '@/components/company/Company';
import Text from '@/components/text/Text';
import {colors} from '@/theme/colors';
import {useFetch} from '@/utils/reactQuery';
import {apiRoutes} from '@/utils/apiRoutes';
import {IAPIResponse, ICompany} from '@/types';

const MyCompaniesScreen = () => {
  const [companies, setCompanies] = React.useState<ICompany[]>([]);
  const {data, isLoading} = useFetch<IAPIResponse<ICompany[]>>(
    apiRoutes.company.companies,
  );

  React.useEffect(() => {
    if (data) {
      setCompanies(data?.data || []);
    }
  }, [data]);

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size={'large'} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text} preset="h2">
        My Companies
      </Text>
      <FlatList
        data={companies}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item._id.toString()}
        renderItem={({item, index}) => (
          <Company
            {...item}
            isLast={index === companies.length - 1}
            key={index}
          />
        )}
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
