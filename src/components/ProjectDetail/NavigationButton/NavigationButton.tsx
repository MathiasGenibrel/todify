import React, { FC } from 'react';
import { View } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';

import { Button, EButton } from '../../atoms/Button/Button';

import { ProjectRootStackParamList } from '../../../views/Project';

import { button } from '../styles';

type NavigationButtonProps = {
  buttonBackText?: string;
};

export const NavigationButton: FC<NavigationButtonProps> = ({
  buttonBackText = 'All Projects',
}) => {
  const { goBack } = useNavigation<NavigationProp<ProjectRootStackParamList>>();

  return (
    <View style={button.container}>
      <Button
        pressHandler={goBack}
        text={buttonBackText}
        type={EButton.TERTIARY}
        iconName={'chevron-left'}
        iconSize={10}
        marginHorizontal={0}
        gap={8}
      />
      <Button
        pressHandler={goBack}
        text={'Edit'}
        type={EButton.TERTIARY}
        marginHorizontal={0}
      />
    </View>
  );
};
