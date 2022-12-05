import React, { DispatchWithoutAction, FC, useState } from 'react';

import { uuidv4 } from '@firebase/util';

import { InputWithLayout } from '../../atoms/InputWithLayout/InputWithLayout';
import { Spacer } from '../../atoms/Spacer/Spacer';
import { Button, EButton } from '../../atoms/Button/Button';
import { CreateOrUpdateTask } from '../../../hooks/useProject/useProject';

type CreateTaskFormProps = {
  createTaskHandler: CreateOrUpdateTask;
  toggleModalView: DispatchWithoutAction;
};

export const CreateTaskForm: FC<CreateTaskFormProps> = ({
  createTaskHandler,
  toggleModalView,
}) => {
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');
  const [date, setDate] = useState('');

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

      <InputWithLayout
        layoutText={'Status :'}
        value={status}
        setValue={setStatus}
        placeholder={'todo'}
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
