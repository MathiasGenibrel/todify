import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useAuthDispatcher } from '../store/auth/useAuthDispatcher';
import { Spacer } from '../components/atoms/Spacer/Spacer';
import { Card } from '../components/Project/Card/Card';
import { spacings } from '../styles/theme';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacings.xl,
  },
});

export const Project = () => {
  const { logoutUser } = useAuthDispatcher();
  return (
    <View style={styles.container}>
      <Spacer space={'xl'} direction={'bottom'} />
      <Card
        title={'Client Review & Feedback'}
        subtitle={'Crypto Wallet Redesign'}
        date={new Date()}
        goal={100}
        status={{ name: 'close' }}
      />
      <TouchableOpacity onPress={logoutUser}>
        <Text>Disconnect</Text>
      </TouchableOpacity>
    </View>
  );
};
