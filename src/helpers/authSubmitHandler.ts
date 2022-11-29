import { ValidationError } from 'joi';
import { authValidationErrorHandler } from './authValidationErrorHandler';
import { Alert } from 'react-native';
import { AuthRepository, UserData } from '../repository/auth/authRepository';
import { AuthDispatcherState } from '../store/auth/authStore.types';

export enum TypeOfRequest {
  LOGIN = 'login',
  REGISTER = 'register',
}

const auth = new AuthRepository();

export const authSubmitHandler = async (
  userData: UserData,
  loginUser: AuthDispatcherState['loginUser'],
  typeOfRequest: TypeOfRequest,
) => {
  try {
    await auth.findOrCreateUser(userData, loginUser, typeOfRequest);
  } catch (err) {
    if (err instanceof ValidationError) {
      const errorToDisplay = authValidationErrorHandler(err);
      errorToDisplay.forEach(error => error && Alert.alert(error.message));
      return console.log(errorToDisplay);
    }

    Alert.alert('An error is occurred');
    console.log('DEBUG Register Form : ', err);
  }
};
