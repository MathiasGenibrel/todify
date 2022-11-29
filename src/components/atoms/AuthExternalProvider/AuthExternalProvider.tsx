import React from 'react';
import { Alert } from 'react-native';

import { Button, EButton } from '../Button/Button';
import { Spacer } from '../Spacer/Spacer';

export const AuthExternalProvider = () => {
  return (
    <>
      <Button
        pressHandler={() => Alert.alert("Apple Sign in, doesn't seem to work")}
        text={'Sign In with Apple'}
        type={EButton.SECONDARY}
        iconName={'apple'}
      />
      <Spacer space={'xl'} direction={'bottom'} />
      <Button
        pressHandler={() => Alert.alert("Google Sign in, doesn't seem to work")}
        text={'Sign In with Google'}
        type={EButton.SECONDARY}
        iconName={'google'}
      />
    </>
  );
};
