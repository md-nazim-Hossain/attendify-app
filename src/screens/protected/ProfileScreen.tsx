import {View, Image, TouchableOpacity} from 'react-native';
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
import {apiRoutes} from '@/utils/apiRoutes';
import {api} from '@/utils/api';
import {launchImageLibrary} from 'react-native-image-picker';

const ProfileScreen = () => {
  const {user, refetch} = useAuth();
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
    try {
      await api.patch(
        `${apiRoutes.employee.employees}/${user?.employee?.employeeId}`,
        values,
      );
      refetch();
      form.reset();
    } catch (error) {
      console.log(error);
    }
  }

  const handleChoosePhoto = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        maxWidth: 500,
        maxHeight: 500,
        quality: 0.7,
      },
      async response => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.errorMessage) {
          console.error('ImagePicker Error: ', response.errorMessage);
        } else {
          const uri = response?.assets?.[0]?.uri;
          console.log('Selected Image: ', uri);
        }
      },
    );
  };

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
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={handleChoosePhoto}
              style={styles.editIconContainer}>
              <MaterialCommunityIcons
                name="pencil"
                size={20}
                color={colors['muted-foreground']}
              />
            </TouchableOpacity>
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
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 126 / 2,
  },
  editIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 35,
    height: 35,
    borderRadius: 35 / 2,
    backgroundColor: colors['light-gray'],
    position: 'absolute',
    bottom: 10,
    right: 0,
    zIndex: 1,
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
