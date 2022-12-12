import { initializeApp, FirebaseApp } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';
import { FirebaseOptions } from 'firebase/app';
import { config } from '../config/config';
import { getDatabase, Database } from 'firebase/database';

const firebaseConfig: FirebaseOptions = { ...config.firebase };

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);

export abstract class FirebaseRepository {
  protected firebaseApp?: FirebaseApp;
  protected firebaseAuth?: Auth;
  protected database: Database;

  protected constructor() {
    this.getFirebaseApp();
    this.database = getDatabase();
  }

  /**
   * Singleton for init the firebase application
   * @private
   */
  private getFirebaseApp(): void {
    if (!this.firebaseApp && !this.firebaseAuth) {
      this.firebaseApp = firebaseApp;
      this.firebaseAuth = firebaseAuth;
    }
  }
}
