import { Text } from 'react-native';
import React, { FC, useState } from 'react';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { useProjectsStore } from '../../../store/project/useProjectsStore';

import { uuidv4 } from '@firebase/util';

import { sortArrayOfObject } from '../../../helpers/sortArrayOfObject';

import { InputWithLayout } from '../../atoms/InputWithLayout/InputWithLayout';
import { Spacer } from '../../atoms/Spacer/Spacer';
import { Button, EButton } from '../../atoms/Button/Button';
import { Dropdown } from '../../atoms/Dropdown/Dropdown';
import { ModalView } from '../../atoms/Modal/Modal';

import { StatusContent } from '../../../types/firebaseDB.types';
import { ProjectRootStackParamList, RootName } from '../../../views/Project';

import { removeDuplicate } from '../../../helpers/removeDuplicate';
import { defaultStatus } from '../../ProjectDetail/TaskForm/defaultStatus';
import { formStyle } from '../../ProjectDetail/TaskForm/CreateTaskForm.styles';

export const ProjectForm: FC = () => {
  const { params } =
    useRoute<RouteProp<ProjectRootStackParamList, RootName.PROJECT_HANDLER>>();
  const navigation = useNavigation();
  const { getProjectById, projectHandler } = useProjectsStore();

  const ProjectHandler = projectHandler();

  const projectId = params.projectId ?? 'NO_ID';
  const isUpdate = params.isUpdate;
  const project = isUpdate ? getProjectById(projectId) : undefined;

  const [title, setTitle] = useState(project?.title ?? '');
  const [subtitle, setSubtitle] = useState(project?.subtitle ?? '');
  const [date, setDate] = useState(project?.date?.toDateString() ?? '');
  const [status, setStatus] = useState<StatusContent | null>(
    project?.status ?? null,
  );

  const submitHandler = () => {
    if (!status) {
      return;
    }

    if (isUpdate) {
      ProjectHandler.update(projectId, {
        id: projectId ?? '',
        title: title,
        subtitle: subtitle,
        status: status,
        date: Date.parse(date) ? new Date(date) : null,
      });
    } else {
      ProjectHandler.create({
        id: uuidv4(),
        title: title,
        subtitle: subtitle,
        status: status,
        date: Date.parse(date) ? new Date(date) : null,
      });
    }
    navigation.goBack();
  };

  const userCantSubmit = !title || !subtitle || !status;

  const statusList = sortArrayOfObject<StatusContent>(
    removeDuplicate<StatusContent>(defaultStatus),
    'name',
  );

  return (
    <ModalView>
      <Text style={formStyle.title}>
        {isUpdate ? 'Update a project' : 'Creating a project'}
      </Text>
      <Text style={formStyle.subtitle}>
        Nothing stains and nothing washes like blood.
      </Text>
      <Spacer space={'l'} />

      <InputWithLayout
        layoutText={'Task name :'}
        value={title}
        setValue={setTitle}
        placeholder={'Take a beer'}
      />
      <Spacer space={'m'} />

      <InputWithLayout
        layoutText={'Description :'}
        value={subtitle}
        setValue={setSubtitle}
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
