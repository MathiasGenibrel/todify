import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useAuthDispatcher } from '../store/auth/useAuthDispatcher';
import { Spacer } from '../components/atoms/Spacer/Spacer';
import { Card } from '../components/Project/Card/Card';
import { spacings } from '../styles/theme';
import { mockProjectData } from '../mocks/projectData';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacings.xl,
  },
});

export const Project = () => {
  const { logoutUser } = useAuthDispatcher();
  return (
    <ScrollView style={styles.container}>
      <Spacer space={'xl'} direction={'bottom'} />
      {mockProjectData.map(project => (
        <>
          <Card {...project} />
          <Spacer space={'l'} direction={'bottom'} />
        </>
      ))}
      <TouchableOpacity onPress={logoutUser}>
        <Text>Disconnect</Text>
      </TouchableOpacity>
      <Spacer space={'xl'} direction={'all'} />
    </ScrollView>
  );
};
