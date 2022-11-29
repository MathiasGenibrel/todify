import { initializeApp, FirebaseApp } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';

type FirebaseConfigProps = {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
};

const firebaseConfig: FirebaseConfigProps = {
  // Empty for push
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);

export abstract class FirebaseRepository {
  protected firebaseApp?: FirebaseApp;
  protected firebaseAuth?: Auth;

  protected constructor() {
    this.getFirebaseApp();
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
