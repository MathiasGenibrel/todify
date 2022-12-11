import { Text, View } from 'react-native';
import React, { FC, useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { Dropdown as DropdownElement } from 'react-native-element-dropdown';

import { ButtonContent, renderItem } from './functions/renderItem';
import { searchHandler } from './functions/searchHandler';

import { DropdownProps } from './Dropdown.types';

import { styles } from './Dropdown.styles';
import { normalize } from '../../../styles/normalize';
import { colors } from '../../../styles/theme';

export const Dropdown: FC<DropdownProps> = ({
  label,
  state,
  setState,
  data,
  createTaskPressHandler,
}) => {
  const currentIconStatus = data.find(element => element.name === state?.name);
  const [searchText, setSearchText] = useState('');

  const buttonContent: ButtonContent = {
    type: 'button',
    name: 'Create Status',
    pressHandler: () => createTaskPressHandler(),
  };

  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <DropdownElement
        data={[...data, buttonContent]}
        labelField="name"
        valueField="name"
        value={state}
        placeholder={'Task value'}
        onChange={item => setState(item)}
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
        renderItem={item => renderItem(item, state)}
        onChangeText={setSearchText}
        search
        searchQuery={(keyword, labelValue) =>
          searchHandler(keyword, labelValue, buttonContent.name)
        }
        searchPlaceholder={'Status...'}
      />
    </View>
  );
};
