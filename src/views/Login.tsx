import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';

import { Spacer } from '../components/atoms/Spacer/Spacer';
import { CompanyBrand } from '../components/atoms/CompanyBrand/CompanyBrand';
import { LoginForm } from '../components/Login/LoginForm';
import { RegisterCTA } from '../components/Login/RegisterCTA';
// import { AuthExternalProvider } from '../components/atoms/AuthExternalProvider/AuthExternalProvider';
// import { ForgetPassword } from '../components/Login/ForgetPassword';
import { spacings } from '../styles/theme';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacings['3xl'],
  },
});
export const Login: FC = () => {
  return (
    <View style={styles.container}>
      <CompanyBrand size={128} />
      <LoginForm />

      {/*<Spacer space={'xl'} direction={'bottom'} />*/}

      {/*<ForgetPassword />*/}

      {/*<Spacer space={'xl'} direction={'bottom'} />*/}

      {/*<AuthExternalProvider />*/}

      <Spacer space={'4xl'} direction={'bottom'} />

      <RegisterCTA />
    </View>
  );
};
