import React, { FC } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { baseStyles, styles } from './Button.styles';
import { normalize } from '../../../styles/normalize';
import { PressHandler } from '../../../../types/PressHandler';

export enum EButton {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  TERTIARY = 'tertiary',
}

type ButtonProps = {
  pressHandler: PressHandler;
  text: string;
  type: EButton;
  iconName?: string;
};

export const Button: FC<ButtonProps> = ({
  text,
  type,
  pressHandler,
  iconName,
}) => {
  const icon = iconName && (
    <Icon size={normalize(20)} style={baseStyles.icon} name={iconName} />
  );

  return (
    <TouchableOpacity style={styles[type].container} onPress={pressHandler}>
      {icon}
      <Text style={styles[type].text}>{text}</Text>
    </TouchableOpacity>
  );
};
