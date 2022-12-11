import React from 'react';
import { ProjectRouter } from '../router/ProjectRouter';
import { CreateOrUpdateTask } from '../hooks/useProject/useProject';
import { StatusContent } from '../types/firebaseDB.types';

export enum RootName {
  PROJECTS = 'projects',
  DETAIL = 'detail',
  CREATE_TASK = 'createTask',
}

export type ProjectRootStackParamList = {
  [RootName.PROJECTS]: undefined;
  [RootName.DETAIL]: { id: string };
  [RootName.CREATE_TASK]: {
    createTaskHandler: CreateOrUpdateTask;
    tasksStatus?: StatusContent[];
  };
};

export const Project = () => {
  return <ProjectRouter />;
};
