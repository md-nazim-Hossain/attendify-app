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
            type="email-address"
            placeHolder="Enter email"
          />
          <FormField
            form={form}
            name="password"
            type="numeric"
            placeHolder="Enter password"
            isSecure
          />
          <Link style={styles.link} screen={'ForgottenPassword'}>
            Forgot Password?
          </Link>
        </View>
        <View style={styles.buttonContainer}>
          <GradientButton
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
  iconStyle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[3] - 2,
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
});
