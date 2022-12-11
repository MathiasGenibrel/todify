// noinspection SpellCheckingInspection

import React, { Dispatch, FC, SetStateAction, useRef } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Spacer } from '../../../atoms/Spacer/Spacer';
import colorsDB from '../../../../json/colors.json';
import { DropdownRefAction } from './Dropdown.types';
import { Dropdown } from 'react-native-element-dropdown';
import { dropdownStyles, styles, viewStyles } from './Dropdown.styles';

export type Color = {
  name: string;
  hex: string;
};

type ColorViewProps = {
  color: Color;
  isLabelDisplay?: boolean;
};

type ColorDropdownProps = {
  selectedColor: Color;
  setSelectedColor: Dispatch<SetStateAction<Color>>;
};

const ColorView: FC<ColorViewProps> = ({ color, isLabelDisplay }) => {
  const selectedColorStyle = StyleSheet.create({
    selectedColor: { backgroundColor: color.hex },
  });

  const selectedColorSquare = StyleSheet.compose(
    styles.baseSelectedColor,
    selectedColorStyle.selectedColor,
  );

  return (
    <View style={isLabelDisplay ? viewStyles.absoluteView : viewStyles.default}>
      <View style={selectedColorSquare} />
      <Spacer space={'m'} direction={'right'} />
      <Text style={viewStyles.text}>
        {!color.name ? 'Select a color' : color.name}
      </Text>
    </View>
  );
};

export const ColorDropdown: FC<ColorDropdownProps> = ({
  selectedColor,
  setSelectedColor,
}) => {
  const dropdownRef = useRef<DropdownRefAction>(null);

  return (
    <TouchableOpacity
      onPress={() => dropdownRef.current?.open()}
      style={dropdownStyles.container}>
      <ColorView color={selectedColor} isLabelDisplay={true} />
      <Spacer space={'l'} direction={'right'} />

      <Dropdown
        ref={dropdownRef}
        data={colorsDB.colors}
        valueField={'name'}
        labelField={''}
        placeholder={''}
        onChange={color => setSelectedColor(color)}
        renderItem={color => <ColorView color={color} />}
      />
    </TouchableOpacity>
  );
};
