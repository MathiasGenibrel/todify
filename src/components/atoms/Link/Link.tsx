import React, { FC } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from './Link.styles';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { PressHandler } from '../../../types/PressHandler';
import { AuthRootStackParamList } from '../../../router/AuthRouter';

type LinkProps = {
  children: string;
  path: keyof AuthRootStackParamList;
};

export const Link: FC<LinkProps> = ({ children, path }) => {
  const navigation = useNavigation<NavigationProp<AuthRootStackParamList>>();

  const handlePress: PressHandler = () => {
    navigation.navigate(path);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};
