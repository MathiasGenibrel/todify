import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';

import { ProgressSectionProps } from './ProgressSection';

import { colors } from '../../../styles/theme';
import { styles } from './ProgressBar.styles';

export const ProgressBar: FC<Pick<ProgressSectionProps, 'progression'>> = ({
  progression,
}) => {
  const { progressBar } = StyleSheet.create({
    progressBar: {
      backgroundColor: colors.primary,
      width: `${progression}%`,
    },
  });
  return (
    <View style={styles.container}>
      <View style={styles.background} />
      <View style={StyleSheet.compose(styles.background, progressBar)} />
    </View>
  );
};
