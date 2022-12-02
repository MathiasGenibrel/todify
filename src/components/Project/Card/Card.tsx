import React, { FC } from 'react';
import { Alert, TouchableOpacity, Vibration, View } from 'react-native';
import { cardStyles } from './Card.styles';
import { Deadline } from './Deadline/Deadline';
import { Goal } from '../../atoms/Goal/Goal';
import { TitleGroup } from './TitleGroup/TitleGroup';
import { Status } from '../../atoms/Status/Status';
import { StatusContent } from '../../../types/firebaseDB.types';

export enum CardType {
  TASK = 'task',
  PROJECT = 'project',
}

export type CardProps = {
  pressHandler: () => void;
  title: string;
  subtitle: string;
  status: StatusContent;
  currentProgression: number;
  date?: Date;
  cardType?: CardType;
};

export const Card: FC<CardProps> = ({
  pressHandler,
  title,
  subtitle,
  status,
  currentProgression,
  date,
  cardType = CardType.PROJECT,
}) => {
  const longPressHandler = () =>
    Alert.alert(
      'Delete this task',
      `Are you sure you want to delete this ${cardType} ?\n\nThis action is irreversible!`,
      [
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => Vibration.vibrate(),
        },
        {
          text: 'Cancel',
          style: 'cancel',
        },
      ],
    );

  return (
    <TouchableOpacity
      style={cardStyles.container}
      onPress={pressHandler}
      onLongPress={longPressHandler}>
      <View style={cardStyles.topContainer}>
        <TitleGroup title={title} subtitle={subtitle} />
        <Goal percentage={currentProgression} />
      </View>

      <View style={cardStyles.bottomContainer}>
        <Status status={status} />
        {date && <Deadline date={date} />}
      </View>
    </TouchableOpacity>
  );
};
