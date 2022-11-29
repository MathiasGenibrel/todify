import React from 'react';

// import { Layout } from './src/components/atoms/Layout/Layout';
import { Login } from './src/views/Login';
import { Register } from './src/views/Register';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
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
    </NavigationContainer>
  );
};
export default App;
