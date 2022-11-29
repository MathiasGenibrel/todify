import React, { FC } from 'react';
import { View } from 'react-native';

import { Spacer } from '../components/atoms/Spacer/Spacer';
import { CompanyBrand } from '../components/atoms/CompanyBrand/CompanyBrand';
import { Form } from '../components/Login/Form';
import { RegisterCTA } from '../components/Login/RegisterCTA';
import { AuthExternalProvider } from '../components/atoms/AuthExternalProvider/AuthExternalProvider';
import { ForgetPassword } from '../components/Login/ForgetPassword';

export const Login: FC = () => {
  return (
    <View>
      <CompanyBrand size={128} />
      <Form />

      <Spacer space={'xl'} direction={'bottom'} />

      <ForgetPassword />

      <Spacer space={'xl'} direction={'bottom'} />

      <AuthExternalProvider />

      <Spacer space={'4xl'} direction={'bottom'} />

      <RegisterCTA />
    </View>
  );
};
