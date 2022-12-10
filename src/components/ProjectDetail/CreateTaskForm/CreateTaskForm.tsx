// noinspection SpellCheckingInspection

import React, { DispatchWithoutAction, FC, useState } from 'react';

import { uuidv4 } from '@firebase/util';

import { CreateOrUpdateTask } from '../../../hooks/useProject/useProject';

import { InputWithLayout } from '../../atoms/InputWithLayout/InputWithLayout';
import { Spacer } from '../../atoms/Spacer/Spacer';
import { Button, EButton } from '../../atoms/Button/Button';
import { Dropdown } from '../../atoms/Dropdown/Dropdown';
import { StatusContent } from '../../../types/firebaseDB.types';
import { removeDuplicate } from '../../atoms/Modal/removeDuplicate';
import { sortArrayOfObject } from '../../../helpers/sortArrayOfObject';

type CreateTaskFormProps = {
  createTaskHandler: CreateOrUpdateTask;
  toggleModalView: DispatchWithoutAction;
  tasksStatus?: StatusContent[];
};

const data: StatusContent[] = [
  { name: 'open' },
  { name: 'todo' },
  { name: 'close' },
];

export const CreateTaskForm: FC<CreateTaskFormProps> = ({
  createTaskHandler,
  toggleModalView,
  tasksStatus = [],
}) => {
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');
  const [date, setDate] = useState('');

  const statusList = sortArrayOfObject<StatusContent>(
    removeDuplicate<StatusContent>([...tasksStatus, ...data]),
    'name',
  );

  // Todo update this form to use best input Type of ux library.
  // Add color picker and icon picker for status
  // Add date picker
  // Use text area for description
  return (
    <>
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
        pressHandler={() => {
          createTaskHandler({
            id: uuidv4(),
            name: taskName,
            description: description,
            status: { name: status.toLowerCase() },
            dateTarget: new Date(date),
            isDone: false,
          });
          toggleModalView();
        }}
      />
    </>
  );
};
