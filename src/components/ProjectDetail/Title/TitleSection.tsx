import React, { FC } from 'react';
import { Text, View } from 'react-native';

import { styles } from './TitleSection.styles';

type TitleProps = {
  title: string;
  subtitle: string;
};

export const TitleSection: FC<TitleProps> = ({ title, subtitle }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};
