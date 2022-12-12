import React, { FC, useState } from 'react';
import { View } from 'react-native';

import { Input } from '../atoms/Input/Input';
import { Spacer } from '../atoms/Spacer/Spacer';
import { Button, EButton } from '../atoms/Button/Button';

import { useAuthDispatcher } from '../../store/auth/useAuthDispatcher';
import {
  authSubmitHandler,
  TypeOfRequest,
} from '../../helpers/authSubmitHandler';

export const LoginForm: FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { loginUser } = useAuthDispatcher();

  return (
    <>
      <View>
        <Input
          value={email}
          setValue={setEmail}
          placeholder={'example@domain.com'}
          iconName={'person'}
          keyboardType={'email-address'}
        />
        <Spacer space={'xl'} direction={'bottom'} />
        <Input
          value={password}
          setValue={setPassword}
          placeholder={'Password'}
          iconName={'lock-closed'}
          keyboardType={'default'}
          textContentType={'password'}
          secureTextEntry={true}
        />
      </View>
      <Spacer space={'xl'} direction={'bottom'} />
      <Button
        pressHandler={() =>
          authSubmitHandler({ email, password }, loginUser, TypeOfRequest.LOGIN)
        }
        text={'Sign In'}
        type={EButton.PRIMARY}
      />
    </>
  );
};
