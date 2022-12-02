import { ProjectData } from '../../types/firebaseDB.types';

export interface ProjectsUserData extends ProjectData {
  totalTasks: number;
  tasksCompleted: number;
  currentProgression: number;
}

export abstract class RealtimeDatabaseRepository {
  // @ts-ignore
  public async getAllUserProjects(_id: string): Promise<ProjectsUserData[]> {}

  public async getUserProject(
    _userId: string,
    _projectId: string,
    // @ts-ignore
  ): Promise<?ProjectsUserData> {}

  public async setUserProject(_userId: string, _projectId: string) {}
}
