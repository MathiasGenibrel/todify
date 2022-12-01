import React, { FC } from 'react';
import { Alert, Text, View } from 'react-native';

import { Button, EButton } from '../../atoms/Button/Button';

import { styles } from './TaskSection.styles';

import { TaskContent } from '../../../types/firebaseDB.types';
import { ProgressSection } from '../ProgressSection/ProgressSection';
import { Spacer } from '../../atoms/Spacer/Spacer';

type TaskSection = {
  tasks?: TaskContent[];
};

export const TaskSection: FC<TaskSection> = ({ tasks }) => {
  const totalTask = tasks?.length ?? 0;
  const numberDone = tasks?.filter(task => task.isDone).length ?? 0;
  const currentProgression = Math.round((numberDone / totalTask) * 100) || 0;

  const taskRemainingToDisplay = totalTask
    ? `${numberDone}/${totalTask}`
    : 'No tasks defined';

  return (
    <>
      <ProgressSection progression={currentProgression} />

      <Spacer space={'l'} direction={'bottom'} />

      <View style={styles.container}>
        <View>
          <Text style={styles.text}>Task remaining</Text>
          <Text style={styles.textNumberTask}>{taskRemainingToDisplay}</Text>
        </View>
        <View>
          <Button
            text={'New Task'}
            type={EButton.SECONDARY}
            pressHandler={() => Alert.alert('Add Task')}
            iconName={'plus'}
            iconSize={12}
            marginHorizontal={0}
            gap={12}
          />
        </View>
      </View>
    </>
  );
};
