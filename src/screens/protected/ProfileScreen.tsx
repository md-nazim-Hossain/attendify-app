import {View, Image} from 'react-native';
import React from 'react';
import {StyleSheet} from 'react-native';
import {applyOpacity} from '@/utils/applyOpacity';
import {colors} from '@/theme/colors';
import {spacing} from '@/theme/spacing';
import Text from '@/components/text/Text';
import GradientButton from '@/components/button/GradientButton';
import {useForm} from 'react-hook-form';
import {IUpdateEmployeeSchema, updateEmployeeSchema} from '@/const/schema';
import {zodResolver} from '@hookform/resolvers/zod';
import FormField from '@/components/form/FormField';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useAuth} from '@/navigations/AuthProvider';

const ProfileScreen = () => {
  const {user} = useAuth();
  const form = useForm<IUpdateEmployeeSchema>({
    resolver: zodResolver(updateEmployeeSchema),
    defaultValues: user?.employee ?? {
      fullName: '',
      designation: '',
      employeeEmail: '',
      phone: '',
      address: '',
    },
    mode: 'all',
  });

  async function onSubmit(values: IUpdateEmployeeSchema) {
    console.log(values);
  }

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.contentContainer}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={
                user?.employee?.photo
                  ? {uri: user?.employee?.photo}
                  : require('@/assets/images/girl.png')
              }
            />
          </View>
          <Text preset="h5" style={styles.text}>
            Employee Id: {user?.employee?.employeeId}
          </Text>
        </View>

        <FormField
          form={form}
          name="fullName"
          placeholder="Name"
          errorStyle={styles.errorStyle}
          variant="editable"
          Icon={
            <MaterialCommunityIcons
              size={24}
              style={styles.iconStyle}
              name="account"
            />
          }
        />
        <FormField
          form={form}
          name="designation"
          placeholder="Designation"
          variant="editable"
          errorStyle={styles.errorStyle}
          Icon={
            <MaterialCommunityIcons
              size={24}
              style={styles.iconStyle}
              name="briefcase"
            />
          }
        />
        <FormField
          form={form}
          name="employeeEmail"
          placeholder="Email"
          variant="editable"
          errorStyle={styles.errorStyle}
          Icon={
            <MaterialCommunityIcons
              size={24}
              style={styles.iconStyle}
              name="email"
            />
          }
        />
        <FormField
          form={form}
          name="phone"
          placeholder="Phone"
          variant="editable"
          errorStyle={styles.errorStyle}
          Icon={
            <MaterialCommunityIcons
              size={24}
              style={styles.iconStyle}
              name="phone"
            />
          }
        />
        <FormField
          form={form}
          name="address"
          placeholder="Address"
          variant="editable"
          errorStyle={styles.errorStyle}
          Icon={
            <MaterialCommunityIcons
              size={24}
              style={styles.iconStyle}
              name="map-marker"
            />
          }
        />
      </View>
      <GradientButton
        onPress={form.handleSubmit(onSubmit)}
        style={{marginHorizontal: spacing[4]}}
        gradientStyle={{height: spacing[13]}}
        title="Update"
        disabled={!form.formState.isDirty || form.formState.isSubmitting}
      />
    </View>
  );
};

export default ProfileScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: spacing[12],
    justifyContent: 'space-between',
  },
  contentContainer: {
    alignItems: 'center',
    marginBottom: spacing[5],
  },
  imageContainer: {
    width: 126,
    height: 126,
    borderRadius: 126 / 2,
    backgroundColor: applyOpacity(colors['medium-navy-blue'], 0.15),
    borderWidth: 1,
    borderColor: colors.black,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 126 / 2,
  },
  text: {
    color: colors['muted-foreground'],
    fontWeight: 600,
    letterSpacing: 1.3,
    marginTop: spacing[3],
  },
  errorStyle: {
    marginLeft: spacing[8],
  },
  iconStyle: {
    color: colors['muted-foreground'],
  },
});
