import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { useAuth } from '../store/auth/useAuth';

import { AuthRouter } from './AuthRouter';
import { AppRouter } from './AppRouter';

export const Router = () => {
  const { isLogged } = useAuth();

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {isLogged ? <AppRouter /> : <AuthRouter />}
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
