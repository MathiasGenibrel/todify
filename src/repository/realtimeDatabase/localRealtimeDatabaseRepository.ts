import { FirebaseRepository } from '../firebaseRepository';
import { mockProjectData } from '../../mocks/projectData';
import { RealtimeDatabaseRepository } from './realtimeDatabaseRepository';

export class LocalRealtimeDatabaseRepository
  extends FirebaseRepository
  implements RealtimeDatabaseRepository
{
  constructor() {
    super();
  }

  public getAllUserProjects(id: string) {
    return mockProjectData[id].projects.map(project => {
      const totalTasks = project.tasks?.length || 0;
      const tasksCompleted =
        project.tasks?.filter(task => task.isDone).length || 0;

      return {
        ...project,
        totalTasks,
        tasksCompleted,
        currentProgression:
          Math.round((tasksCompleted / totalTasks) * 100) || 0,
      };
    });
  }

  public getUserProject(userId: string, projectId: string) {
    const projects = this.getAllUserProjects(userId);

    return projects.find(project => project.id === projectId);
  }

  // TODO
  public setUserProject(userId: string, projectId: string) {
    console.log(userId, projectId);
  }
}
