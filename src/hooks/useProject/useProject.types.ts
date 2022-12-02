import { ProjectsUserData } from '../../repository/realtimeDatabase/realtimeDatabaseRepository';
import { TaskContent } from '../../types/firebaseDB.types';

export enum ActionType {
  INIT = 'init',
  CREATE_TASK = 'create',
  UPDATE_TASK = 'update',
  DELETE_TASK = 'delete',
}

export type ActionPayload = {
  project?: ProjectsUserData;
  task?: TaskContent;
  taskId?: string;
};

export type ActionProps = {
  type: ActionType;
  payload: ActionPayload;
};
