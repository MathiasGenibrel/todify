import React from 'react';
import { ProjectRouter } from '../router/ProjectRouter';

export enum RootName {
  PROJECTS = 'projects',
  DETAIL = 'detail',
}

export type ProjectRootStackParamList = {
  [RootName.PROJECTS]: undefined;
  [RootName.DETAIL]: { id: string };
};

export const Project = () => {
  return <ProjectRouter />;
};
