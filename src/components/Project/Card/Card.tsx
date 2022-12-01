import React, { FC } from 'react';
import { Alert, TouchableOpacity, View } from 'react-native';
import { cardStyles } from './Card.styles';
import { Deadline } from './Deadline/Deadline';
import { Goal } from '../../atoms/Goal/Goal';
import { TitleGroup } from './TitleGroup/TitleGroup';
import { Status } from '../../atoms/Status/Status';
import { StatusContent } from '../../../types/firebaseDB.types';

export type CardProps = {
  pressHandler: () => void;
  title: string;
  subtitle: string;
  status: StatusContent;
  currentProgression: number;
  date?: Date;
};

export const Card: FC<CardProps> = ({
  pressHandler,
  title,
  subtitle,
  status,
  currentProgression,
  date,
}) => {
  return (
    <TouchableOpacity
      style={cardStyles.container}
      onPress={pressHandler}
      onLongPress={() => Alert.alert('Long Press')}>
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
