import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { useAuth } from '../store/auth/useAuth';

import { AuthRouter } from './AuthRouter';
import { AppRouter } from './AppRouter';

export const Router = () => {
  const { isLogged } = useAuth();

  console.log({ isLogged });

  return (
    <NavigationContainer>
      {isLogged ? <AppRouter /> : <AuthRouter />}
    </NavigationContainer>
  );
};
