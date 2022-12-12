import React, { createContext, FC } from 'react';
import { ProjectsUserData } from '../../repository/realtimeDatabase/realtimeDatabaseRepository';
import { useProjects } from './useProjects';
import { Task } from './Handler/Task';
import { Project } from './Handler/Project';

type ProjectContextValue = {
  projects: ProjectsUserData[];
  getProjectById: (id: string) => ProjectsUserData;
  projectHandler: () => Project;
  taskHandler: (projectId: string) => Task;
};

// tasksStatus: tasks?.map(task => task.status)

export const ProjectStore = createContext<ProjectContextValue | null>(null);

type ProjectStoreProviderProps = {
  children: JSX.Element | JSX.Element[];
};

export const ProjectStoreProvider: FC<ProjectStoreProviderProps> = ({
  children,
}) => {
  const projectsAction = useProjects();

  return (
    <ProjectStore.Provider value={{ ...projectsAction }}>
      {children}
    </ProjectStore.Provider>
  );
};
