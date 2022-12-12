import { Dispatch } from 'react';
import { ActionProps, ActionType } from '../reducer';
import { ProjectsUserData } from '../../../repository/realtimeDatabase/realtimeDatabaseRepository';

type ProjectDataHandler = Omit<
  ProjectsUserData,
  'goal' | 'tasksCompleted' | 'totalTasks' | 'currentProgression'
>;

export class Project {
  private readonly dispatch;

  constructor(dispatch: Dispatch<ActionProps>) {
    this.dispatch = dispatch;
  }

  public setCalculationValue(project: ProjectDataHandler): ProjectsUserData {
    const tasksCompleted =
      project.tasks?.filter(task => task.isDone).length ?? 0;
    const totalTasks = project.tasks?.length ?? 0;

    return {
      totalTasks: Math.round((tasksCompleted / totalTasks) * 100) || 0,
      tasksCompleted,
      currentProgression: Math.round((tasksCompleted / totalTasks) * 100) || 0,
      ...project,
    };
  }

  public create(userProject: ProjectDataHandler) {
    this.dispatch({
      type: ActionType.CREATE,
      payload: { project: this.setCalculationValue(userProject) },
    });
  }

  public update(projectId: string, projectData: ProjectDataHandler) {
    this.dispatch({
      type: ActionType.UPDATE,
      payload: {
        id: projectId,
        projectUpdated: this.setCalculationValue(projectData),
      },
    });
  }

  public delete(projectId: string) {
    this.dispatch({
      type: ActionType.DELETE,
      payload: { id: projectId },
    });
  }
}
