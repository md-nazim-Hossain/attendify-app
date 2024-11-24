import {View} from 'react-native';
import React from 'react';
import {StyleSheet} from 'react-native';
import {spacing} from '@/theme/spacing';
import {colors} from '@/theme/colors';
import GradientButton from '@/components/button/GradientButton';
import {useAuth} from '@/navigations/AuthProvider';
import AddNewLeaveRequestForm from '@/components/leaveRequest/AddNewLeaveRequestForm';
import MyRequest from '@/components/leaveRequest/MyRequest';

const MyRequestScreen = () => {
  const {isAdmin} = useAuth();
  return (
    <View style={styles.container}>
      <View>
        <MyRequest />
      </View>
      {!isAdmin && (
        <AddNewLeaveRequestForm
          trigger={({ref}) => (
            <GradientButton
              onPress={() => ref.current.open()}
              title="+ Add leave request"
            />
          )}
        />
      )}
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
    gap: spacing[3],
  },
});
