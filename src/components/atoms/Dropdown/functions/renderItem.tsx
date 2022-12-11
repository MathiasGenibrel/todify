import { StatusContent } from '../../../../types/firebaseDB.types';
import { Button, EButton } from '../../Button/Button';
import { Item } from '../Item/Item';
import React from 'react';

export type ButtonContent = {
  type: string;
  name: string;
  pressHandler: () => void;
};

export const renderItem = (
  element: StatusContent | ButtonContent,
  state: StatusContent | null,
) => {
  if (element.hasOwnProperty('type')) {
    // Used to specify at Typescript, the current element is actually of type ButtonContent
    const button = element as ButtonContent;
    return (
      <Button
        text={button.name}
        type={EButton.TERTIARY}
        pressHandler={button.pressHandler}
      />
    );
  }
  return (
    <Item item={element as StatusContent} selectedItem={state?.name ?? ''} />
  );
};
