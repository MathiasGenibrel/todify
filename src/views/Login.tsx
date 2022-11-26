import React, { FC, useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Input } from '../components/atoms/Input/Input';
import { spacings } from '../styles/theme';
import { Spacer } from '../components/atoms/Spacer/Spacer';

const LoginStyles = StyleSheet.create({
  image: {
    alignSelf: 'center',
    marginBottom: spacings['6xl'],
    marginTop: spacings['3xl'],
  },
});

export const Login: FC<any> = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <View>
      <Image
        style={LoginStyles.image}
        source={require('../../public/assets/companyLogo.png')}
      />
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
    </View>
  );
};
