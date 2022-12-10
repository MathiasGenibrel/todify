// noinspection SpellCheckingInspection

import React, { DispatchWithoutAction, FC, useState } from 'react';

import { uuidv4 } from '@firebase/util';

import { CreateOrUpdateTask } from '../../../hooks/useProject/useProject';

import { sortArrayOfObject } from '../../../helpers/sortArrayOfObject';
import { defaultStatus } from './defaultStatus';

import { InputWithLayout } from '../../atoms/InputWithLayout/InputWithLayout';
import { Spacer } from '../../atoms/Spacer/Spacer';
import { Button, EButton } from '../../atoms/Button/Button';
import { Dropdown } from '../../atoms/Dropdown/Dropdown';
import { StatusContent } from '../../../types/firebaseDB.types';
import { removeDuplicate } from '../../../helpers/removeDuplicate';

type CreateTaskFormProps = {
  createTaskHandler: CreateOrUpdateTask;
  toggleModalView: DispatchWithoutAction;
  tasksStatus?: StatusContent[];
};

export const CreateTaskForm: FC<CreateTaskFormProps> = ({
  createTaskHandler,
  toggleModalView,
  tasksStatus = [],
}) => {
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState<StatusContent | null>(null);
  const [date, setDate] = useState('');

  const submitHandler = () => {
    if (!status) {
      return;
    }

    createTaskHandler({
      id: uuidv4(),
      name: taskName,
      description: description,
      status: status,
      dateTarget: Date.parse(date) ? new Date(date) : null,
      isDone: false,
    });
    toggleModalView();
  };

  const userCantSubmit = !taskName || !description || !status;

  const statusList = sortArrayOfObject<StatusContent>(
    removeDuplicate<StatusContent>([...tasksStatus, ...defaultStatus]),
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
        pressHandler={submitHandler}
        disabled={userCantSubmit}
      />
    </>
  );
};
