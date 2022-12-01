import React, { FC } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { styles } from './Button.styles';
import { normalize } from '../../../styles/normalize';
import { PressHandler } from '../../../types/PressHandler';

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
  iconSize?: number;
  marginHorizontal?: number;
  gap?: number;
};

export const Button: FC<ButtonProps> = ({
  text,
  type,
  pressHandler,
  iconName,
  iconSize,
  marginHorizontal = 30,
  gap = 16,
}) => {
  const customStyle = StyleSheet.create({
    container: {
      marginHorizontal: normalize(marginHorizontal),
    },
    icon: {
      marginRight: normalize(gap),
    },
  });

  const containerStyle = StyleSheet.compose(
    styles[type].container,
    customStyle.container,
  );

  const iconStyle = StyleSheet.compose(styles[type].icon, customStyle.icon);

  const icon = iconName && (
    <Icon size={normalize(iconSize ?? 20)} style={iconStyle} name={iconName} />
  );

  return (
    <TouchableOpacity style={containerStyle} onPress={pressHandler}>
      {icon}
      <Text style={styles[type].text}>{text}</Text>
    </TouchableOpacity>
  );
};
