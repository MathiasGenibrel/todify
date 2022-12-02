import React from 'react';
import { ProjectRouter } from '../router/ProjectRouter';

export type ProjectRootStackParamList = {
  projects: undefined;
  detail: { id: string };
};

export const Project = () => {
  return <ProjectRouter />;
};
