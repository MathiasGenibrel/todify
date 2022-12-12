import { useEffect, useReducer } from 'react';

import { useRequiredAuth } from '../../hooks/useRequiredAuth';

import { ActionType, reducerProject } from './reducer';
import { LocalRealtimeDatabaseRepository } from '../../repository/realtimeDatabase/localRealtimeDatabaseRepository';
import { ProjectsUserData } from '../../repository/realtimeDatabase/realtimeDatabaseRepository';
import { Task } from './Handler/Task';

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

  const createProject = (userProject: ProjectsUserData) =>
    dispatch({ type: ActionType.CREATE, payload: { project: userProject } });

  const updateProject = (projectId: string, projectData: ProjectsUserData) => {
    dispatch({
      type: ActionType.UPDATE,
      payload: { id: projectId, project: projectData },
    });
  };

  const deleteProject = (projectId: string) => {
    dispatch({
      type: ActionType.DELETE,
      payload: { id: projectId },
    });
  };

  const getProjectById = (id: string) => {
    const projectToUpdate = projects.find(project => project.id === id);

    if (!projectToUpdate) {
      throw new Error('Bad id');
    }

    return { ...projectToUpdate };
  };

  const taskHandler = (projectId: string) =>
    new Task(dispatch, getProjectById, projectId);

  return {
    projects,
    getProjectById,
    // Project handler
    createProject,
    updateProject,
    deleteProject,

    // Task Handler
    taskHandler,
  };
};
