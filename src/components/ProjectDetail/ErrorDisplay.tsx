import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';

import { Spacer } from '../atoms/Spacer/Spacer';
import { Button, EButton } from '../atoms/Button/Button';

import { ProjectRootStackParamList } from '../../views/Project';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const ErrorDisplay = () => {
  const { goBack } = useNavigation<NavigationProp<ProjectRootStackParamList>>();

  return (
    <View style={styles.container}>
      <Text>An error has occurred</Text>
      <Text>Try again later</Text>
      <Spacer space={'l'} direction={'bottom'} />
      <Button
        text={'Back to Home'}
        type={EButton.PRIMARY}
        pressHandler={goBack}
      />
    </View>
  );
};
