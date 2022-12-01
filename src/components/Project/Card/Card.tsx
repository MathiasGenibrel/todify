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
  date: Date;
  status: StatusContent;
  currentProgression: number;
};

// TODO replace goal by task
export const Card: FC<CardProps> = ({
  pressHandler,
  title,
  subtitle,
  date,
  status,
  currentProgression,
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
        <Deadline date={date} />
        <Status status={status} />
      </View>
    </TouchableOpacity>
  );
};
