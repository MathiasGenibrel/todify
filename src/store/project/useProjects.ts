import { useEffect, useReducer } from 'react';

import { useRequiredAuth } from '../../hooks/useRequiredAuth';

// import { LocalRealtimeDatabaseRepository } from '../../repository/realtimeDatabase/localRealtimeDatabaseRepository';
import { RemoteRealtimeDatabaseRepository } from '../../repository/realtimeDatabase/remoteRealtimeDatabaseRepository';
import { ActionType, reducerProject } from './reducer';
import { Task } from './Handler/Task';
import { Project } from './Handler/Project';

const projectDB = new RemoteRealtimeDatabaseRepository(); //new LocalRealtimeDatabaseRepository();

export const useProjects = () => {
  const [projects, dispatch] = useReducer(reducerProject, []);
  const user = useRequiredAuth();

  useEffect(() => {
    projectDB.getAllUserProjects(user.id).then(projectsList => {
      if (projectsList.hasOwnProperty('database')) {
        return;
      }

      dispatch({
        type: ActionType.INIT,
        payload: { projectsList },
      });
    });
  }, [user.id]);

  useEffect(() => {
    if (projectDB) {
      projectDB
        .setUserProjects(user.id, projects)
        .catch(err => console.error(err));
    }
  }, [user.id, projects]);

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
