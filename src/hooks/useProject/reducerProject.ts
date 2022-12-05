import { ProjectsUserData } from '../../repository/realtimeDatabase/realtimeDatabaseRepository';
import { ActionProps, ActionType } from './useProject.types';

// TODO Refactor this bullshit
export const reducerProject = (
  state: ProjectsUserData | null,
  action: ActionProps,
) => {
  switch (action.type) {
    case ActionType.INIT:
      if (!action.payload.project) {
        throw new Error(
          'The property "project" in "payload" cannot be empty during the "INIT" action',
        );
      }

      return action.payload.project;

    case ActionType.CREATE_TASK:
      if (!state) {
        throw new Error('State cannot be empty in this Action Type');
      }

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
      if (!state?.tasks) {
        throw new Error('Cannot be empty or cannot have any task');
      }

      if (!action.payload.task) {
        throw new Error(
          'The property "task" in "payload" cannot be empty during the "UPDATE_TASK" action',
        );
      }

      const actionPayloadTask = action.payload.task;

      const taskToUpdate = state.tasks.find(
        task => task.id === actionPayloadTask.id,
      );

      if (!taskToUpdate) {
        throw new Error(`Task with id : ${actionPayloadTask.id} doesn't exist`);
      }

      return {
        ...state,
        tasks: [
          ...state.tasks.filter(task => task.id !== actionPayloadTask.id),
          actionPayloadTask,
        ],
      };

    case ActionType.DELETE_TASK:
      if (!state?.tasks) {
        throw new Error('Cannot be empty or cannot have any task');
      }

      if (!action.payload.taskId) {
        throw new Error(
          'The property "taskId" in "payload" cannot be empty during the "DELETE" action',
        );
      }

      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload.taskId),
      };

    default:
      return state;
  }
};
