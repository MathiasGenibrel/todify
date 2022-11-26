import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { spacings } from '../../../styles/theme';

type SpacerProps = {
  space: keyof typeof spacings;
  direction?:
    | 'all'
    | 'left'
    | 'right'
    | 'top'
    | 'bottom'
    | 'vertical'
    | 'horizontal'
    | 'end'
    | 'start';
};

export const Spacer: FC<SpacerProps> = ({ space, direction = 'all' }) => {
  const styles = StyleSheet.create({
    all: {
      margin: spacings[space],
    },
    left: {
      marginLeft: spacings[space],
    },
    right: {
      marginRight: spacings[space],
    },
    top: {
      marginTop: spacings[space],
    },
    bottom: {
      marginBottom: spacings[space],
    },
    vertical: {
      marginVertical: spacings[space],
    },
    horizontal: {
      marginHorizontal: spacings[space],
    },
    end: {
      marginEnd: spacings[space],
    },
    start: {
      marginStart: spacings[space],
    },
  });

  return <View style={styles[direction]} />;
};
