import { Alert } from 'react-native';
import { Button, EButton } from '../atoms/Button/Button';
import React from 'react';

import { PressHandler } from '../../types/PressHandler';

export const ForgetPassword = () => {
  const pressHandler: PressHandler = () => {
    Alert.alert('Oops, buy a Brain');
  };
  return (
    <Button
      pressHandler={pressHandler}
      text={'Forget Password ?'}
      type={EButton.TERTIARY}
    />
  );
};
