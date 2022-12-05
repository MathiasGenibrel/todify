import { useEffect, useReducer } from 'react';
import { LocalRealtimeDatabaseRepository } from '../../repository/realtimeDatabase/localRealtimeDatabaseRepository';
import { useRequiredAuth } from '../useRequiredAuth';
import { useProjects } from '../useProjects';
import { TaskContent } from '../../types/firebaseDB.types';
import { reducerProject } from './reducerProject';
import { ActionType } from './useProject.types';

const projectDB = new LocalRealtimeDatabaseRepository();

export type CreateOrUpdateTask = (taskContent: TaskContent) => void;
export type DeleteTask = (taskId: string) => void;

export const useProject = (projectId: string) => {
  const [project, dispatch] = useReducer(reducerProject, null);
  const { projects, updateProject } = useProjects();
  const user = useRequiredAuth();

  useEffect(() => {
    projectDB.getUserProject(user.id, projectId).then(currentProject => {
      if (!currentProject) {
        throw new Error(
          'An error occurred with this project.\n Try again later.',
        );
      }
      dispatch({
        type: ActionType.INIT,
        payload: { project: currentProject },
      });
    });
  }, [user.id, projectId, projects]);

  const createTask: CreateOrUpdateTask = (taskContent: TaskContent) => {
    dispatch({ type: ActionType.CREATE_TASK, payload: { task: taskContent } });
  };

  const updateTask: CreateOrUpdateTask = (taskContent: TaskContent) => {
    dispatch({ type: ActionType.UPDATE_TASK, payload: { task: taskContent } });
  };

  const deleteTask: DeleteTask = (taskId: string) => {
    dispatch({ type: ActionType.DELETE_TASK, payload: { taskId } });
  };

  return { project, updateProject, createTask, updateTask, deleteTask };
};
