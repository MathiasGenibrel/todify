import { FirebaseRepository } from '../firebaseRepository';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { AuthDispatcherState } from '../../store/auth/authStore.types';
import { loginSchema, registerSchema } from './auth.schema';
import { TypeOfRequest } from '../../helpers/authSubmitHandler';

export type UserData = {
  email: string;
  password: string;
  confirmPassword?: string;
};

export class AuthRepository extends FirebaseRepository {
  constructor() {
    super();
  }

  private async createUser(email: string, password: string) {
    const userCreated = await createUserWithEmailAndPassword(
      this.firebaseAuth as Auth,
      email,
      password,
    );

    return userCreated.user;
  }

  private async findUser(email: string, password: string) {
    const userFound = await signInWithEmailAndPassword(
      this.firebaseAuth as Auth,
      email,
      password,
    );

    return userFound.user;
  }

  /**
   * Find or Create user in Firebase DB
   * @param userData Correspond to the email / password / confirmPassword (Data need to be verified)
   * @param loginUser Dispatch function, used to update router of the application
   * @param type To know if the user want to log in or to register.
   */
  public async findOrCreateUser(
    userData: UserData,
    loginUser: AuthDispatcherState['loginUser'],
    type: TypeOfRequest,
  ) {
    const userWantsToLogin = type === 'login';

    const schemaToValidate = userWantsToLogin ? loginSchema : registerSchema;
    const userDataVerified = await schemaToValidate.validateAsync({
      ...userData,
    });

    if (
      !userWantsToLogin &&
      userDataVerified.password !== userDataVerified.confirmPassword
    ) {
      throw new SyntaxError('Password and Confirm password is différent !');
    }

    const user = userWantsToLogin
      ? await this.findUser(userDataVerified.email, userDataVerified.password)
      : await this.createUser(
          userDataVerified.email,
          userDataVerified.password,
        );

    if (!user) {
      throw new Error('An error occurred with Firebase');
    }

    loginUser({
      email: user.email as string,
      emailVerified: user.emailVerified,
      id: user.uid,
    });
  }
}
