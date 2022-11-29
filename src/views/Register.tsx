import React, { FC } from 'react';
import { View } from 'react-native';

import { Spacer } from '../components/atoms/Spacer/Spacer';
import { CompanyBrand } from '../components/atoms/CompanyBrand/CompanyBrand';
import { AuthExternalProvider } from '../components/atoms/AuthExternalProvider/AuthExternalProvider';
import { RegisterForm } from '../components/Register/RegisterForm/RegisterForm';
import { SignInCTA } from '../components/Register/SignInCTA';

export const Register: FC = () => {
  return (
    <View>
      <CompanyBrand size={128} />
      <RegisterForm />

      <Spacer space={'4xl'} direction={'bottom'} />

      <AuthExternalProvider />

      <Spacer space={'4xl'} direction={'bottom'} />

      <SignInCTA />
    </View>
  );
};
