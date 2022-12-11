import { useContext } from 'react';
import { ProjectStore } from './projectStore';

export const useProjectsStore = () => {
  const projectStore = useContext(ProjectStore);

  if (!projectStore) {
    throw new Error('You cannot use this hooks outside of his provider');
  }

  return projectStore;
};
