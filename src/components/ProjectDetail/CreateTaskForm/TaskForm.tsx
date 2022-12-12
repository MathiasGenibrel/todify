import { Text } from 'react-native';
import React, { FC, useState } from 'react';
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

import { StatusContent, TaskContent } from '../../../types/firebaseDB.types';
import { ProjectRootStackParamList, RootName } from '../../../views/Project';

import { removeDuplicate } from '../../../helpers/removeDuplicate';

import { styles } from './CreateTaskForm.styles';

export type TaskContentProps = Partial<
  Pick<TaskContent, 'id' | 'name' | 'description' | 'status' | 'dateTarget'>
>;

export const TaskForm: FC = () => {
  const { params } =
    useRoute<RouteProp<ProjectRootStackParamList, RootName.TASK_HANDLER>>();
  const navigation = useNavigation();
  const { getProjectById, taskHandler } = useProjectsStore();

  const TaskHandler = taskHandler(params.projectId);
  const task = params.task;
  const isUpdate = params.isUpdate;

  const [name, setName] = useState(task?.name ?? '');
  const [description, setDescription] = useState(task?.description ?? '');
  const [status, setStatus] = useState<StatusContent | null>(
    task?.status ?? null,
  );
  const [date, setDate] = useState(task?.dateTarget?.toDateString() ?? '');

  const project = getProjectById(params.projectId);
  const tasks = project.tasks?.map(currentTask => currentTask.status);

  const submitHandler = () => {
    if (!status) {
      return;
    }

    if (isUpdate) {
      TaskHandler.update({
        id: task?.id ?? '',
        name: name,
        description: description,
        status: status,
        dateTarget: Date.parse(date) ? new Date(date) : null,
        isDone: false,
      });
    } else {
      TaskHandler.create({
        id: uuidv4(),
        name: name,
        description: description,
        status: status,
        dateTarget: Date.parse(date) ? new Date(date) : null,
        isDone: false,
      });
    }
    navigation.goBack();
  };

  const userCantSubmit = !name || !description || !status;

  const statusList = sortArrayOfObject<StatusContent>(
    removeDuplicate<StatusContent>([...(tasks ?? []), ...defaultStatus]),
    'name',
  );

  return (
    <ModalView>
      <Text style={styles.title}>
        {isUpdate ? 'Update a task' : 'Creating a task'}
      </Text>
      <Text style={styles.subtitle}>
        Nothing stains and nothing washes like blood.
      </Text>
      <Spacer space={'l'} />

      <InputWithLayout
        layoutText={'Task name :'}
        value={name}
        setValue={setName}
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
        text={isUpdate ? 'Update' : 'Create'}
        type={EButton.PRIMARY}
        pressHandler={submitHandler}
        disabled={userCantSubmit}
      />
    </ModalView>
  );
};
