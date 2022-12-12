import { ProjectsUserData } from '../../repository/realtimeDatabase/realtimeDatabaseRepository';

export enum ActionType {
  INIT = 'init',
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
}

type ActionPayload = {
  id?: string;
  projectsList?: ProjectsUserData[];
  project?: ProjectsUserData;
  projectUpdated?: Partial<ProjectsUserData>;
};

export type ActionProps = {
  type: ActionType;
  payload: ActionPayload;
};

export const reducerProject = (
  state: ProjectsUserData[],
  action: ActionProps,
) => {
  switch (action.type) {
    case ActionType.INIT:
      if (!action.payload.projectsList) {
        throw new Error(
          'The property "projectsList" in "payload" cannot be empty during the "INIT" action',
        );
      }

      return action.payload.projectsList;

    case ActionType.CREATE:
      if (!action.payload.project) {
        throw new Error(
          'The property "project" in "payload" cannot be empty during the "CREATE" action',
        );
      }

      return [...state, action.payload.project];

    case ActionType.UPDATE:
      if (!action.payload.id) {
        throw new Error(
          'The property "id" in "payload" cannot be empty during the "UPDATE" action',
        );
      }

      const projectToUpdate = state.find(
        project => project.id === action.payload.id,
      );

      if (!projectToUpdate) {
        throw new Error(`Project with id : ${action.payload.id} doesn't exist`);
      }

      return [
        ...state.filter(project => project.id !== action.payload.id),
        { ...projectToUpdate, ...action.payload.projectUpdated },
      ];

    case ActionType.DELETE:
      if (!action.payload.id) {
        throw new Error(
          'The property "id" in "payload" cannot be empty during the "DELETE" action',
        );
      }

      return [...state.filter(project => project.id !== action.payload.id)];

    default:
      return state;
  }
};
