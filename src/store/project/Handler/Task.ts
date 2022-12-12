import { Dispatch } from 'react';
import { TaskContent } from '../../../types/firebaseDB.types';
import { ActionType, ActionProps } from '../reducer';
import { ProjectsUserData } from '../../../repository/realtimeDatabase/realtimeDatabaseRepository';

type getProjectById = (id: string) => ProjectsUserData;

export class Task {
  private readonly dispatch;
  private readonly project;
  private readonly projectId;

  constructor(
    dispatch: Dispatch<ActionProps>,
    getProjectById: getProjectById,
    projectId: string,
  ) {
    this.dispatch = dispatch;
    this.project = getProjectById(projectId);
    this.projectId = projectId;
  }

  private setCurrentProgression() {
    const tasksCompleted =
      this.project.tasks?.filter(task => task.isDone).length ?? 0;

    this.project.currentProgression =
      Math.round((tasksCompleted / this.project.totalTasks) * 100) || 0;
  }

  create(task: TaskContent) {
    this.project.tasks = this.project.tasks
      ? [...this.project.tasks, task]
      : [task];

    this.project.totalTasks = this.project.tasks.length;
    this.setCurrentProgression();

    this.dispatch({
      type: ActionType.UPDATE,
      payload: { id: this.projectId, projectUpdated: this.project },
    });
  }

  update(task: TaskContent) {
    if (!this.project.tasks) {
      throw new Error('Cannot update a task, if there is none');
    }

    this.project.tasks = [
      ...this.project.tasks.filter(currentTask => currentTask.id !== task.id),
      task,
    ];

    this.setCurrentProgression();

    this.dispatch({
      type: ActionType.UPDATE,
      payload: { id: this.projectId, projectUpdated: this.project },
    });
  }

  delete(taskId: string) {
    if (!this.project.tasks) {
      throw new Error('Cannot delete a task, if there is none');
    }

    this.project.tasks = this.project.tasks.filter(task => task.id !== taskId);
    this.project.totalTasks = this.project.tasks.length;

    this.setCurrentProgression();

    this.dispatch({
      type: ActionType.UPDATE,
      payload: { id: this.projectId, projectUpdated: this.project },
    });
  }
}
