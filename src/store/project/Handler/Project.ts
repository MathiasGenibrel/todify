import { Dispatch } from 'react';
import { ActionProps, ActionType } from '../reducer';
import { ProjectsUserData } from '../../../repository/realtimeDatabase/realtimeDatabaseRepository';

export class Project {
  private readonly dispatch;

  constructor(dispatch: Dispatch<ActionProps>) {
    this.dispatch = dispatch;
  }

  public create(userProject: ProjectsUserData) {
    this.dispatch({
      type: ActionType.CREATE,
      payload: { project: userProject },
    });
  }

  public update(projectId: string, projectData: ProjectsUserData) {
    this.dispatch({
      type: ActionType.UPDATE,
      payload: { id: projectId, project: projectData },
    });
  }

  public delete(projectId: string) {
    this.dispatch({
      type: ActionType.DELETE,
      payload: { id: projectId },
    });
  }
}
