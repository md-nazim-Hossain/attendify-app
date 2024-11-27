import {View, StyleSheet, Image} from 'react-native';
import React from 'react';
import {colors} from '@/theme/colors';
import {spacing} from '@/theme/spacing';
import {applyOpacity} from '@/utils/applyOpacity';
import FormField from '@/components/form/FormField';
import {useForm} from 'react-hook-form';
import {ILoginSchema, logingSchema} from '@/const/schema';
import {zodResolver} from '@hookform/resolvers/zod';
import Text from '@/components/text/Text';
import GradientButton from '@/components/button/GradientButton';
import {Link} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const LoginScreen = ({}) => {
  const form = useForm<ILoginSchema>({
    resolver: zodResolver(logingSchema),
    mode: 'all',
  });

  async function onSubmit(values: ILoginSchema) {
    console.log(values);
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageOverlay} />
      <Image
        style={styles.image}
        source={require('@/assets/images/auth-bg.png')}
      />
      <View style={styles.formConainer}>
        <Text preset="h2" style={styles.title}>
          Welcome to Attendify
        </Text>
        <View>
          <FormField
            form={form}
            name="email"
            keyboardType="email-address"
            placeholder="Enter email"
            Icon={
              <MaterialCommunityIcons
                size={24}
                style={styles.iconStyle}
                name="email"
              />
            }
          />
          <FormField
            containerStyle={{paddingRight: spacing[3]}}
            form={form}
            name="password"
            keyboardType="numeric"
            placeholder="Enter password"
            secureTextEntry
            Icon={
              <MaterialCommunityIcons
                size={24}
                style={styles.iconStyle}
                name="key-variant"
              />
            }
          />
          <Link style={styles.link} screen={'ForgottenPassword'}>
            Forgot Password?
          </Link>
        </View>
        <View style={styles.buttonContainer}>
          <GradientButton
            disabled={!form.formState.isSubmitting}
            title="Sign-In"
            textStyle={styles.button}
            colors={[colors.white, '#CDCBD8', '#4D4774']}
            onPress={form.handleSubmit(onSubmit)}
          />
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  imageOverlay: {
    width: '100%',
    height: 480,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: applyOpacity(colors.white, 0.3),
    zIndex: 1,
  },
  image: {
    width: '100%',
    height: 480,
    resizeMode: 'cover',
  },
  formConainer: {
    position: 'absolute',
    width: '100%',
    height: 385,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
    backgroundColor: colors.primary,
    borderTopRightRadius: spacing[8],
    borderTopLeftRadius: spacing[8],
    paddingHorizontal: spacing[6],
    paddingVertical: spacing[8],
  },
  title: {
    fontWeight: 800,
    marginBottom: spacing[8],
    textAlign: 'center',
  },

  buttonContainer: {
    marginTop: spacing[8],
  },
  button: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors['dark-navy-blue'],
  },
  link: {
    color: colors.white,
    fontWeight: 500,
    fontSize: 12,
    letterSpacing: 12 * 0.15,
    marginTop: spacing[2],
  },
  linkHover: {
    textDecorationLine: 'underline',
  },
  iconStyle: {
    color: colors.white,
  },
});
