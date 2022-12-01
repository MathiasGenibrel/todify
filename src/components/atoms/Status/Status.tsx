import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { normalize } from '../../../styles/normalize';
import { styles } from './Status.styles';
import { colors } from '../../../styles/theme';

export type StatusContent = {
  name: string;
  iconName?: string;
  color?: string;
};

type StatusProps = {
  status: StatusContent;
};

enum StatusDefaultCase {
  OPEN = 'open',
  TODO = 'todo',
  CLOSE = 'close',
}

const getColor = (status: StatusContent) => {
  if (status.color) {
    return status.color;
  }

  switch (status.name) {
    case StatusDefaultCase.OPEN:
      return colors.info;

    case StatusDefaultCase.TODO:
      return colors.warning;

    case StatusDefaultCase.CLOSE:
      return colors.success;

    default:
      return colors.text;
  }
};

const getContentColor = (status: StatusContent) => {
  const colorToDisplay = getColor(status);

  const customColor = StyleSheet.create({
    selected: { color: colorToDisplay },
  });

  const styleSheetColor =
    status.color !== colors.text
      ? StyleSheet.compose(styles.text, customColor.selected)
      : styles.text;

  return { textColor: styleSheetColor, iconColor: colorToDisplay };
};

export const Status: FC<StatusProps> = ({ status }) => {
  const { textColor, iconColor } = getContentColor(status);

  return (
    <View style={styles.container}>
      <Text style={textColor}>{status.name}</Text>
      <Icon
        color={iconColor}
        size={normalize(24)}
        name={'checkmark-circle-outline'}
      />
    </View>
  );
};
