import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { StatusContent } from '../../../../types/firebaseDB.types';

import { normalize } from '../../../../styles/normalize';
import { colors, spacings, fontSizes } from '../../../../styles/theme';

type ItemProps = {
  item: StatusContent;
  selectedItem: string;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacings.l,
    paddingVertical: spacings.ml,
  },
  text: {
    fontSize: fontSizes.m,
    textTransform: 'capitalize',
  },
});

export const Item: FC<ItemProps> = ({ item, selectedItem }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{item.name}</Text>
      {item.name === selectedItem && (
        <Icon
          name="checkmark-circle-outline"
          size={normalize(22)}
          color={colors.success}
        />
      )}
    </View>
  );
};
