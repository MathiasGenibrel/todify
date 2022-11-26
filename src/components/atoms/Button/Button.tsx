import React, { FC } from 'react';
import { GestureResponderEvent, Text, TouchableOpacity } from 'react-native';
import { styles } from './Button.styles';

export enum EButton {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  TERTIARY = 'tertiary',
}

type ButtonProps = {
  pressHandler: (event: GestureResponderEvent) => void;
  text: string;
  type: EButton;
};

export const Button: FC<ButtonProps> = ({ text, type, pressHandler }) => {
  switch (type) {
    case EButton.PRIMARY:
      return (
        <TouchableOpacity
          style={styles.primary.container}
          onPress={pressHandler}>
          <Text style={styles.primary.text}>{text}</Text>
        </TouchableOpacity>
      );
    case EButton.SECONDARY:
      return (
        <TouchableOpacity onPress={pressHandler}>
          <Text>{text}</Text>
        </TouchableOpacity>
      );

    case EButton.TERTIARY:
      return (
        <TouchableOpacity onPress={pressHandler}>
          <Text>{text}</Text>
        </TouchableOpacity>
      );

    default:
      return null;
  }
};
