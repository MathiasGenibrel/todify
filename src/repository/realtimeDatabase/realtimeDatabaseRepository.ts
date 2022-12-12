import { ProjectData } from '../../types/firebaseDB.types';

export interface ProjectsUserData extends ProjectData {
  totalTasks: number;
  tasksCompleted: number;
  currentProgression: number;
}

export abstract class RealtimeDatabaseRepository {
  // @ts-ignore
  public async getAllUserProjects(_id: string): Promise<ProjectsUserData[]> {}

  public async setUserProjects(_userId: string, _projectId: string) {}
}
