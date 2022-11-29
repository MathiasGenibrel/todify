import React, { FC } from 'react';
import { GestureResponderEvent, Text, TouchableOpacity } from 'react-native';
import { styles } from './Link.styles';

type LinkProps = {
  children: string;
  path: string;
};

type HandlePress = (event: GestureResponderEvent) => void;

export const Link: FC<LinkProps> = ({ children, path }) => {
  const handlePress: HandlePress = event => {
    console.log(event);
    console.log(path);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};
