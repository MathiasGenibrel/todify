import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { useAuthDispatcher } from '../store/auth/useAuthDispatcher';
import { Button, EButton } from '../components/atoms/Button/Button';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export const Task = () => {
  const { logoutUser } = useAuthDispatcher();

  return (
    <View style={styles.container}>
      <Text>Task!</Text>

      <Button
        type={EButton.PRIMARY}
        text={'Disconnect'}
        pressHandler={logoutUser}
      />
    </View>
  );
};
