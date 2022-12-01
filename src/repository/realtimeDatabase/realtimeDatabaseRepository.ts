import { FirebaseRepository } from '../firebaseRepository';

export class RealtimeDatabaseRepository extends FirebaseRepository {
  constructor() {
    super();
  }

  public getAllUserProjects(_id: string) {}

  public getUserProject(_userId: string, _projectId: string) {}

  public setUserProject(_userId: string, _projectId: string) {}
}
