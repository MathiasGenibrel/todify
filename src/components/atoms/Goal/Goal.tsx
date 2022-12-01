import React, { FC } from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { cardStyles } from '../../Project/Card/Card.styles';

import { colors } from '../../../styles/theme';
import { normalize } from '../../../styles/normalize';

type GoalProps = {
  percentage: number;
};

export const Goal: FC<GoalProps> = ({ percentage }) => {
  if (percentage === 100) {
    return (
      <Icon
        size={normalize(28)}
        name={'checkmark-circle-outline'}
        color={colors.primary}
      />
    );
  }

  if (percentage === 0) {
    return (
      <Icon
        size={normalize(28)}
        name={'ellipse-outline'}
        color={colors.textSecondary}
      />
    );
  }

  return <Text style={cardStyles.goal}>{percentage}%</Text>;
};
