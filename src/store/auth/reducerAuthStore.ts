import { ActionProps, ActionType, AuthState } from './authStore.types';

export const reducerAuthStore = (state: AuthState, action: ActionProps) => {
  switch (action.type) {
    case ActionType.LOGIN:
      if (!action.payload) {
        throw new Error('In AuthReducer, Payload cannot be empty');
      }

      return { isLogged: true, user: action.payload };

    case ActionType.LOGOUT:
      return { isLogged: false, user: undefined };

    default:
      return state;
  }
};
