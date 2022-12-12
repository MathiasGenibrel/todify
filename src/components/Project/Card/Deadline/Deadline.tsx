import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';
import { spacings } from '../../../../styles/theme';
import { normalize } from '../../../../styles/normalize';

type DeadlineProps = {
  date: Date;
};

const styles = StyleSheet.create({
  container: { flexDirection: 'row', alignItems: 'center', opacity: 0.35 },
  date: { marginLeft: spacings.s, fontWeight: '600' },
});

const dateConverter = (currentDate: Date | string) => {
  if (typeof currentDate === 'string') {
    return currentDate;
  }

  return currentDate.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
};

export const Deadline: FC<DeadlineProps> = ({ date }) => {
  return (
    <View style={styles.container}>
      <Icon size={normalize(16)} name="clock" />
      <Text style={styles.date}>{dateConverter(date)}</Text>
    </View>
  );
};
