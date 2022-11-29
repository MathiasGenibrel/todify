import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Board } from '../views/Board';

export type RootStackParamList = {
  Board: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const AppRouter = () => {
  return (
    <Stack.Navigator initialRouteName={'Board'}>
      <Stack.Screen
        name="Board"
        component={Board}
        options={{ title: 'Your Board' }}
      />
    </Stack.Navigator>
  );
};
