import React from 'react';
import { View } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';

import { Button, EButton } from '../../atoms/Button/Button';

import { ProjectRootStackParamList } from '../../../views/Project';

import { button } from '../styles';

export const NavigationButton = () => {
  const { goBack } = useNavigation<NavigationProp<ProjectRootStackParamList>>();

  return (
    <View style={button.container}>
      <Button
        pressHandler={goBack}
        text={'back'}
        type={EButton.TERTIARY}
        iconName={'chevron-left'}
        iconSize={10}
        marginHorizontal={0}
        gap={8}
      />
      <Button
        pressHandler={goBack}
        text={'edit'}
        type={EButton.TERTIARY}
        marginHorizontal={0}
      />
    </View>
  );
};
