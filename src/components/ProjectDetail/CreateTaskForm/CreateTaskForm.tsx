import { Text } from 'react-native';
import React, { useState } from 'react';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { useProjectsStore } from '../../../store/project/useProjectsStore';

import { uuidv4 } from '@firebase/util';

import { sortArrayOfObject } from '../../../helpers/sortArrayOfObject';
import { defaultStatus } from './defaultStatus';

import { InputWithLayout } from '../../atoms/InputWithLayout/InputWithLayout';
import { Spacer } from '../../atoms/Spacer/Spacer';
import { Button, EButton } from '../../atoms/Button/Button';
import { Dropdown } from '../../atoms/Dropdown/Dropdown';
import { ModalView } from '../../atoms/Modal/Modal';

import { StatusContent } from '../../../types/firebaseDB.types';
import { ProjectRootStackParamList, RootName } from '../../../views/Project';

import { removeDuplicate } from '../../../helpers/removeDuplicate';

import { styles } from './CreateTaskForm.styles';

export const CreateTaskForm = () => {
  const { params } =
    useRoute<RouteProp<ProjectRootStackParamList, RootName.CREATE_TASK>>();
  const navigation = useNavigation();
  const { getProjectById, createTask } = useProjectsStore();

  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState<StatusContent | null>(null);
  const [date, setDate] = useState('');

  const project = getProjectById(params.projectId);
  const tasks = project.tasks?.map(task => task.status);

  const submitHandler = () => {
    if (!status) {
      return;
    }

    createTask(params.projectId, {
      id: uuidv4(),
      name: taskName,
      description: description,
      status: status,
      dateTarget: Date.parse(date) ? new Date(date) : null,
      isDone: false,
    });
    navigation.goBack();
  };

  const userCantSubmit = !taskName || !description || !status;

  const statusList = sortArrayOfObject<StatusContent>(
    removeDuplicate<StatusContent>([...(tasks ?? []), ...defaultStatus]),
    'name',
  );

  return (
    <ModalView>
      <Text style={styles.title}>Creating a task</Text>
      <Text style={styles.subtitle}>
        Nothing stains and nothing washes like blood.
      </Text>
      <Spacer space={'l'} />

      <InputWithLayout
        layoutText={'Task name :'}
        value={taskName}
        setValue={setTaskName}
        placeholder={'Take a beer'}
      />
      <Spacer space={'m'} />

      <InputWithLayout
        layoutText={'Description :'}
        value={description}
        setValue={setDescription}
        placeholder={'With Jason and Mike'}
      />
      <Spacer space={'m'} />

      <Dropdown
        label={'Status :'}
        state={status}
        setState={setStatus}
        data={statusList}
      />
      <Spacer space={'m'} />

      <InputWithLayout
        layoutText={'Date target :'}
        value={date}
        setValue={setDate}
        placeholder={'2023-01-10'}
      />
      <Spacer space={'m'} />

      <Button
        text={'Create'}
        type={EButton.PRIMARY}
        pressHandler={submitHandler}
        disabled={userCantSubmit}
      />
    </ModalView>
  );
};
