// noinspection SpellCheckingInspection

import React, { useState } from 'react';
import { Text } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';

import { ModalView } from '../../atoms/Modal/Modal';
import { Button, EButton } from '../../atoms/Button/Button';
import { InputWithLayout } from '../../atoms/InputWithLayout/InputWithLayout';
import { Spacer } from '../../atoms/Spacer/Spacer';

import { ProjectRootStackParamList, RootName } from '../../../views/Project';
import { IconDropdown } from './Dropdown/IconDropdown';
import { Color, ColorDropdown } from './Dropdown/ColorDropdown';
import { formStyles } from './Dropdown/Dropdown.styles';

const defaultSelectedColor: Color = {
  name: 'Xiketic',
  hex: '#1B1725',
};

export const CreateStatusForm = () => {
  const router =
    useRoute<RouteProp<ProjectRootStackParamList, RootName.CREATE_STATUS>>();
  const [name, setName] = useState(router.params?.statusName ?? '');
  const [color, setColor] = useState<Color>(defaultSelectedColor);
  const [icon, setIcon] = useState('help-circle-outline');

  const userCantSubmit = !name || !color || !icon;

  const submitHandler = () => {};

  return (
    <ModalView>
      <Text style={formStyles.title}>Create Status</Text>
      <Text style={formStyles.subtitle}>
        What people say about you behind your back reflects your status in the
        community
      </Text>
      <Spacer space={'l'} />

      <InputWithLayout
        layoutText={'Status name :'}
        value={name}
        setValue={setName}
        placeholder={'Review'}
      />
      <Spacer space={'m'} />

      <IconDropdown iconName={icon} setIconName={setIcon} />
      <Spacer space={'m'} />

      <ColorDropdown selectedColor={color} setSelectedColor={setColor} />
      <Spacer space={'ml'} />

      <Button
        text={'Create'}
        type={EButton.PRIMARY}
        pressHandler={submitHandler}
        disabled={userCantSubmit}
      />
    </ModalView>
  );
};
