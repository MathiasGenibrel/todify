import { useEffect, useReducer } from 'react';

import { useRequiredAuth } from '../../hooks/useRequiredAuth';

import { ActionType, reducerProject } from './reducer';
import { LocalRealtimeDatabaseRepository } from '../../repository/realtimeDatabase/localRealtimeDatabaseRepository';
import { Task } from './Handler/Task';
import { Project } from './Handler/Project';

const projectDB = new LocalRealtimeDatabaseRepository();

export const useProjects = () => {
  const [projects, dispatch] = useReducer(reducerProject, []);
  const user = useRequiredAuth();

  useEffect(() => {
    projectDB.getAllUserProjects(user.id).then(projectsList =>
      dispatch({
        type: ActionType.INIT,
        payload: { projectsList },
      }),
    );
  }, [user.id]);

  const getProjectById = (id: string) => {
    const projectToUpdate = projects.find(project => project.id === id);

    if (!projectToUpdate) {
      throw new Error('Bad id');
    }

    return { ...projectToUpdate };
  };

  const projectHandler = () => new Project(dispatch);

  const taskHandler = (projectId: string) =>
    new Task(dispatch, getProjectById, projectId);

  return {
    projects,
    getProjectById,
    projectHandler,
    taskHandler,
  };
};
