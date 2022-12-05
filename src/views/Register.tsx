import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';

import { Spacer } from '../components/atoms/Spacer/Spacer';
import { CompanyBrand } from '../components/atoms/CompanyBrand/CompanyBrand';
import { AuthExternalProvider } from '../components/atoms/AuthExternalProvider/AuthExternalProvider';
import { RegisterForm } from '../components/Register/RegisterForm/RegisterForm';
import { SignInCTA } from '../components/Register/SignInCTA';
import { spacings } from '../styles/theme';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacings['3xl'],
  },
});
export const Register: FC = () => {
  return (
    <View style={styles.container}>
      <CompanyBrand size={128} />
      <RegisterForm />

      <Spacer space={'4xl'} direction={'bottom'} />

      <AuthExternalProvider />

      <Spacer space={'4xl'} direction={'bottom'} />

      <SignInCTA />
    </View>
  );
};
