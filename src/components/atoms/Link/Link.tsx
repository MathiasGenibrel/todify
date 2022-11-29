import React, { FC } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from './Link.styles';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../../../App';
import { PressHandler } from '../../../types/PressHandler';

type LinkProps = {
  children: string;
  path: keyof RootStackParamList;
};

export const Link: FC<LinkProps> = ({ children, path }) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handlePress: PressHandler = () => {
    navigation.navigate(path);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};
