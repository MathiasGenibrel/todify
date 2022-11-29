import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useAuthDispatcher } from '../store/auth/useAuthDispatcher';

export const Board = () => {
  const { logoutUser } = useAuthDispatcher();
  return (
    <>
      <Text>Board</Text>
      <TouchableOpacity onPress={logoutUser}>
        <Text>Disconnect</Text>
      </TouchableOpacity>
    </>
  );
};
