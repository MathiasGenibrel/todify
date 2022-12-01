import { FirebaseRepository } from '../firebaseRepository';
import { mockProjectData } from '../../mocks/projectData';

export class LocalRealtimeDatabaseRepository extends FirebaseRepository {
  constructor() {
    super();
  }

  public getAllUserProjects(id: string) {
    const projects = mockProjectData[id].projects.map(project => {
      return {
        ...project,
        totalTasks: project.tasks?.length || 0,
        tasksCompleted: project.tasks?.map(task => task.isDone).length,
      };
    });

    return {
      projects: mockProjectData[id].projects,
    };
  }
}
