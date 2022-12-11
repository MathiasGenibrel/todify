import icons from '../../../../json/icon.json';
import Icon from 'react-native-vector-icons/Ionicons';
import React, { Dispatch, FC, SetStateAction, useRef } from 'react';
import { TouchableOpacity } from 'react-native';
import { normalize } from '../../../../styles/normalize';
import { Spacer } from '../../../atoms/Spacer/Spacer';
import { DropdownRefAction } from './Dropdown.types';
import { Dropdown } from 'react-native-element-dropdown';
import { dropdownStyles, styles } from './Dropdown.styles';

type IconDropdownProps = {
  iconName: string;
  setIconName: Dispatch<SetStateAction<string>>;
};

export const IconDropdown: FC<IconDropdownProps> = ({
  iconName,
  setIconName,
}) => {
  const dropdownRef = useRef<DropdownRefAction>(null);

  return (
    <TouchableOpacity
      onPress={() => dropdownRef.current?.open()}
      style={dropdownStyles.container}>
      <Icon name={iconName} size={normalize(32)} style={styles.icon} />
      <Spacer space={'l'} direction={'right'} />

      <Dropdown
        ref={dropdownRef}
        data={icons.icons}
        valueField={'name'}
        labelField={''}
        placeholder={''}
        onChange={icon => setIconName(icon.name)}
        renderItem={icon => (
          <Icon name={icon.name} size={normalize(32)} style={styles.iconList} />
        )}
      />
    </TouchableOpacity>
  );
};
