import React from 'react';
import { ProjectRouter } from '../router/ProjectRouter';
import { CreateOrUpdateTask } from '../hooks/useProject/useProject';
import { StatusContent } from '../types/firebaseDB.types';

export enum RootName {
  PROJECTS = 'projects',
  DETAIL = 'detail',
  CREATE_TASK = 'createTask',
  CREATE_STATUS = 'createStatus',
}

export type ProjectRootStackParamList = {
  [RootName.PROJECTS]: undefined;
  [RootName.DETAIL]: { id: string };
  [RootName.CREATE_TASK]: {
    createTaskHandler: CreateOrUpdateTask;
    tasksStatus?: StatusContent[];
  };
  [RootName.CREATE_STATUS]?: {
    statusName?: string;
  };
};

export const Project = () => {
  return <ProjectRouter />;
};
