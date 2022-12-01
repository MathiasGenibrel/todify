import React, { FC } from 'react';
import { Text, View } from 'react-native';

import { Spacer } from '../../atoms/Spacer/Spacer';

import { ProgressBar } from './ProgressBar';
import { styles } from './ProgressSection.styles';

export type ProgressSectionProps = {
  progression: number;
};

export const ProgressSection: FC<ProgressSectionProps> = ({ progression }) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>Progress</Text>
        <Text style={styles.text}>{progression}%</Text>
      </View>
      <Spacer space={'m'} direction={'bottom'} />
      <ProgressBar progression={progression} />
    </>
  );
};
