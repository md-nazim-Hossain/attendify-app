import {Image, View} from 'react-native';
import React from 'react';
import {StyleSheet} from 'react-native';
import {spacing} from '@/theme/spacing';
import {colors} from '@/theme/colors';
import GradientButton from '@/components/button/GradientButton';
import {useAuth} from '@/navigations/AuthProvider';
import AddNewLeaveRequestForm from '@/components/leaveRequest/AddNewLeaveRequestForm';
import Text from '@/components/text/Text';
import {applyOpacity} from '@/utils/applyOpacity';
// import MyRequest from '@/components/leaveRequest/MyRequest';

const MyRequestScreen = () => {
  const {isAdmin} = useAuth();
  return (
    <View style={styles.container}>
      <Text preset="h2" style={styles.title}>
        My requests
      </Text>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          resizeMode="cover"
          source={require('@/assets/images/leave-request-empty.png')}
        />
        <Text preset="small" style={styles.text}>
          No requests to display
        </Text>
      </View>
      {/* <View>
        <MyRequest />
      </View> */}
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
    paddingHorizontal: spacing[5],
    paddingVertical: spacing[8],
    backgroundColor: colors.white,
    gap: spacing[3],
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 160,
    width: 200,
  },
  text: {
    textAlign: 'center',
    color: applyOpacity(colors['muted-foreground'], 0.4),
    fontWeight: 800,
    letterSpacing: 1.3,
    marginTop: spacing[2],
  },
  title: {
    color: colors['secondary-foreground'],
    letterSpacing: 20 * 0.08,
    fontWeight: 900,
    textAlign: 'center',
  },
});
