import React, { FC, useState } from 'react';
import { Alert, View } from 'react-native';

import { Input } from '../components/atoms/Input/Input';
import { Spacer } from '../components/atoms/Spacer/Spacer';
import { Button, EButton } from '../components/atoms/Button/Button';
import { CompanyBrand } from '../components/atoms/CompanyBrand/CompanyBrand';

export const Login: FC<void> = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <View>
      <CompanyBrand size={128} />
      <View>
        <Input
          value={email}
          setValue={setEmail}
          placeholder={'Email'}
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
        pressHandler={() => Alert.alert(email)}
        text={'Sign In'}
        type={EButton.PRIMARY}
      />
    </View>
  );
};
