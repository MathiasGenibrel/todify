import { useEffect, useReducer } from 'react';
import { LocalRealtimeDatabaseRepository } from '../repository/realtimeDatabase/localRealtimeDatabaseRepository';
import { ProjectsUserData } from '../repository/realtimeDatabase/realtimeDatabaseRepository';
import { useRequiredAuth } from './useRequiredAuth';
import { useProjects } from './useProjects';
import { TaskContent } from '../types/firebaseDB.types';

const projectDB = new LocalRealtimeDatabaseRepository();

enum ActionType {
  INIT = 'init',
  CREATE_TASK = 'create',
  UPDATE_TASK = 'update',
  DELETE_TASK = 'delete',
}

type ActionPayload = {
  project?: ProjectsUserData;
  task?: TaskContent;
  taskId?: string;
};

type ActionProps = {
  type: ActionType;
  payload: ActionPayload;
};

const reducerProject = (state: ProjectsUserData, action: ActionProps) => {
  switch (action.type) {
    case ActionType.INIT:
      if (!action.payload.project) {
        throw new Error(
          'The property "project" in "payload" cannot be empty during the "INIT" action',
        );
      }

      return action.payload.project;

    case ActionType.CREATE_TASK:
      if (!action.payload.task) {
        throw new Error(
          'The property "project" in "payload" cannot be empty during the "CREATE" action',
        );
      }

      const projectTasks = state.tasks
        ? [...state.tasks, action.payload.task]
        : [action.payload.task];

      return {
        ...state,
        tasks: projectTasks,
      };

    case ActionType.UPDATE_TASK:
      if (!action.payload.taskId) {
        throw new Error(
          'The property "taskId" in "payload" cannot be empty during the "UPDATE_TASK" action',
        );
      }

      if (!state.tasks) {
        throw new Error('No task exist');
      }

      const taskToUpdate = state.tasks.find(
        task => task.id === action.payload.taskId,
      );

      if (!taskToUpdate) {
        throw new Error(
          `Task with id : ${action.payload.taskId} doesn't exist`,
        );
      }

      return {
        ...state,
        tasks: [
          ...state.tasks.filter(task => task.id !== action.payload.taskId),
          taskToUpdate,
        ],
      };

    case ActionType.DELETE_TASK:
      if (!action.payload.taskId) {
        throw new Error(
          'The property "taskId" in "payload" cannot be empty during the "DELETE" action',
        );
      }

      if (!state.tasks) {
        throw new Error('No task exist');
      }

      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload.taskId),
      };

    default:
      return state;
  }
};

export const useProject = (projectId: string) => {
  const [project, dispatch] = useReducer(reducerProject, {});
  const { updateProject } = useProjects();
  const user = useRequiredAuth();

  useEffect(() => {
    projectDB.getUserProject(user.id, projectId).then(currentProject =>
      dispatch({
        type: ActionType.INIT,
        payload: { project: currentProject },
      }),
    );
  }, [user.id, projectId]);

  return { project, updateProject };
};
