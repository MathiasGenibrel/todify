import React, { FC } from 'react';
import { View } from 'react-native';
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';

import { Button, EButton } from '../../atoms/Button/Button';

import { ProjectRootStackParamList, RootName } from '../../../views/Project';

import { button } from '../styles';

type NavigationButtonProps = {
  buttonBackText?: string;
};

export const NavigationButton: FC<NavigationButtonProps> = ({
  buttonBackText = 'All Projects',
}) => {
  const { goBack, navigate } =
    useNavigation<NavigationProp<ProjectRootStackParamList>>();
  const { params } =
    useRoute<RouteProp<ProjectRootStackParamList, RootName.DETAIL>>();

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
        pressHandler={() =>
          navigate(RootName.PROJECT_HANDLER, {
            projectId: params.id,
            isUpdate: true,
          })
        }
        text={'Edit'}
        type={EButton.TERTIARY}
        marginHorizontal={0}
      />
    </View>
  );
};
