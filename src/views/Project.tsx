import React from 'react';
import { ProjectRouter } from '../router/ProjectRouter';
import { ProjectStoreProvider } from '../store/project/projectStore';

export enum RootName {
  PROJECTS = 'projects',
  DETAIL = 'detail',
  CREATE_TASK = 'createTask',
  CREATE_STATUS = 'createStatus',
}

export type ProjectRootStackParamList = {
  [RootName.PROJECTS]: undefined;
  [RootName.DETAIL]: { id: string };
  [RootName.CREATE_TASK]: { projectId: string };
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
