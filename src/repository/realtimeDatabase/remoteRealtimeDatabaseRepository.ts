import { FirebaseRepository } from '../firebaseRepository';
import {
  ProjectsUserData,
  RealtimeDatabaseRepository,
} from './realtimeDatabaseRepository';
import { ref, get, child, update } from 'firebase/database';

export class RemoteRealtimeDatabaseRepository
  extends FirebaseRepository
  implements RealtimeDatabaseRepository
{
  private readonly projectsRef;

  constructor() {
    super();
    this.projectsRef = ref(this.database);
  }

  public async getAllUserProjects(id: string) {
    try {
      const snapshot = await get(
        child(this.projectsRef, `users/${id}/projects`),
      );

      return snapshot.exists() ? snapshot.val() : [];
    } catch (error) {
      console.error(error);
      throw new Error(error as string);
    }
  }

  // @ts-ignore
  public async setUserProjects(userId: string, projects: ProjectsUserData[]) {
    const updates = {
      [`users/${userId}/projects`]: projects,
    };

    return await update(this.projectsRef, updates);
  }
}
