import React, { FC } from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { normalize } from '../../../styles/normalize';
import { styles } from './Status.styles';
import { getContentColor } from './getContentColor';
import { StatusContent } from '../../../types/firebaseDB.types';

export enum StatusDefaultCase {
  OPEN = 'open',
  TODO = 'todo',
  CLOSE = 'close',
}

type StatusProps = {
  status: StatusContent;
};

const getIconName = (status: StatusContent) => {
  // Usage of Ionicons => https://ionic.io/ionicons
  if (status.iconName) {
    return status.iconName;
  }

  switch (status.name) {
    case StatusDefaultCase.OPEN:
      return 'ellipse-outline';

    case StatusDefaultCase.TODO:
      return 'timer-outline';

    case StatusDefaultCase.CLOSE:
      return 'checkmark-circle-outline';

    default:
      return 'leaf-outline';
  }
};

export const Status: FC<StatusProps> = ({ status }) => {
  const { textColor, iconColor } = getContentColor(status);

  return (
    <View style={styles.container}>
      <Text style={textColor}>{status.name}</Text>
      <Icon color={iconColor} size={normalize(24)} name={getIconName(status)} />
    </View>
  );
};
