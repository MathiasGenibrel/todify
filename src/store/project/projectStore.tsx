import React, { createContext, FC } from 'react';
import { ProjectsUserData } from '../../repository/realtimeDatabase/realtimeDatabaseRepository';
import { useProjects } from './useProjects';
import { TaskContent } from '../../types/firebaseDB.types';

export type CreateOrUpdateTask = (id: string, taskContent: TaskContent) => void;
export type DeleteTask = (id: string, taskId: string) => void;

type ProjectContextValue = {
  projects: ProjectsUserData[];
  getProjectById: (id: string) => ProjectsUserData;
  createProject: (userProject: ProjectsUserData) => void;
  updateProject: (projectId: string, projectData: ProjectsUserData) => void;
  deleteProject: (projectId: string) => void;
  createTask: CreateOrUpdateTask;
  updateTask: CreateOrUpdateTask;
  deleteTask: DeleteTask;
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
