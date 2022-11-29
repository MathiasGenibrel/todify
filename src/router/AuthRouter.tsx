import React from 'react';

import { Login } from '../views/Login';
import { Register } from '../views/Register';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const AuthRouter = () => {
  return (
    <Stack.Navigator initialRouteName={'Login'}>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ title: 'Connect to your account' }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ title: 'Create an account' }}
      />
    </Stack.Navigator>
  );
};
