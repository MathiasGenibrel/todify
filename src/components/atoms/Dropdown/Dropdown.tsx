import React, { Dispatch, FC, SetStateAction } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { Dropdown as DropdownLib } from 'react-native-element-dropdown';

import { normalize } from '../../../styles/normalize';
import { StyleSheet, Text, View } from 'react-native';
import { colors, fontSizes, spacings } from '../../../styles/theme';
import { Item } from './Item/Item';
import { StatusContent } from '../../../types/firebaseDB.types';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: spacings.l,
    paddingVertical: spacings.m,
    borderRadius: spacings.s,
  },
  text: {
    paddingLeft: spacings.s,
    color: colors.text,
    fontSize: fontSizes.l,
    textTransform: 'capitalize',
  },
  label: {
    marginBottom: spacings.s,
  },
});

export type Data = { label: string; value: string };

type DropdownProps = {
  label: string;
  state: string;
  setState: Dispatch<SetStateAction<string>>;
  data: StatusContent[];
};

export const Dropdown: FC<DropdownProps> = ({
  label,
  state,
  setState,
  data,
}) => {
  const currentIconStatus = data.find(element => element.name === state);

  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <DropdownLib
        data={data}
        labelField="name"
        valueField="name"
        value={state}
        placeholder={'Task value'}
        onChange={item => setState(item.name)}
        renderLeftIcon={() => (
          <Icon
            name={currentIconStatus?.iconName ?? 'help-circle-outline'}
            size={normalize(22)}
            color={colors.text}
          />
        )}
        style={styles.container}
        placeholderStyle={styles.text}
        selectedTextStyle={styles.text}
        renderItem={item => <Item item={item} selectedItem={state} />}
        search
        searchPlaceholder={'Status...'}
      />
    </View>
  );
};
