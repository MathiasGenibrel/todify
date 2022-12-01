import React, { FC } from 'react';
import { Text, View } from 'react-native';

import { styles } from './TitleGroup.styles';

type TitleGroupProps = {
  title: string;
  subtitle: string;
};

export const TitleGroup: FC<TitleGroupProps> = ({ title, subtitle }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title} numberOfLines={1}>
        {title}
      </Text>
      <Text style={styles.subtitle} numberOfLines={1}>
        {subtitle}
      </Text>
    </View>
  );
};
