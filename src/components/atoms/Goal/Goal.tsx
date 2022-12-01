import React, { FC } from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { cardStyles } from '../../Project/Card/Card.styles';

import { colors } from '../../../styles/theme';
import { normalize } from '../../../styles/normalize';

type GoalProps = {
  percentage: number;
};

export const Goal: FC<GoalProps> = ({ percentage }) => {
  if (percentage === 100) {
    return (
      <Icon size={normalize(24)} name={'check-circle'} color={colors.primary} />
    );
  }

  return <Text style={cardStyles.goal}>{percentage}%</Text>;
};
