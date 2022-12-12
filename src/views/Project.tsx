import React from 'react';
import { ProjectRouter } from '../router/ProjectRouter';
import { ProjectStoreProvider } from '../store/project/projectStore';
import { TaskContentProps } from '../components/ProjectDetail/TaskForm/TaskForm';

export enum RootName {
  PROJECTS = 'projects',
  DETAIL = 'detail',
  TASK_HANDLER = 'taskHandler',
  PROJECT_HANDLER = 'projectHandler',
  CREATE_STATUS = 'createStatus',
}

export type ProjectRootStackParamList = {
  [RootName.PROJECTS]: undefined;
  [RootName.DETAIL]: { id: string };
  [RootName.TASK_HANDLER]: {
    projectId: string;
    isUpdate?: boolean;
    task?: TaskContentProps;
  };
  [RootName.PROJECT_HANDLER]: {
    projectId?: string;
    isUpdate?: boolean;
  };
  [RootName.CREATE_STATUS]?: {
    statusName?: string;
  };
};

export const Project = () => {
  return (
    <ProjectStoreProvider>
      <ProjectRouter />
    </ProjectStoreProvider>
  );
};
