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

const ProfileScreen = () => {
  const form = useForm<IUpdateEmployeeSchema>({
    resolver: zodResolver(updateEmployeeSchema),
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
              source={require('@/assets/images/girl.png')}
            />
          </View>
          <Text preset="h5" style={styles.text}>
            Employee Id: 0958686
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
          name="email"
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
    position: 'relative',
    borderWidth: 1,
    borderColor: colors.black,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
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
