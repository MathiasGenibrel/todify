import React, { createContext, FC, useReducer } from 'react';
import {
  ActionType,
  AuthDispatcherState,
  AuthState,
  AuthStoreProps,
  UserState,
} from './authStore.types';
import { reducerAuthStore } from './reducerAuthStore';

export const AUTH_CONTEXT = createContext<AuthState | null>(null);
export const AUTH_CONTEXT_DISPATCHER =
  createContext<AuthDispatcherState | null>(null);

const INITIAL_AUTH: AuthState = {
  isLogged: false,
  user: undefined,
};

export const AuthStore: FC<AuthStoreProps> = ({ children }) => {
  const [auth, dispatch] = useReducer(reducerAuthStore, INITIAL_AUTH);

  const loginUser = (user: UserState) =>
    dispatch({ type: ActionType.LOGIN, payload: user });
  const logoutUser = () => dispatch({ type: ActionType.LOGOUT });

  let values = { ...auth };
  if (auth.isLogged) {
    values = { ...auth, user: auth.user as UserState };
  }

  const dispatcherValue = { loginUser, logoutUser };

  return (
    <AUTH_CONTEXT.Provider value={values}>
      <AUTH_CONTEXT_DISPATCHER.Provider value={dispatcherValue}>
        {children}
      </AUTH_CONTEXT_DISPATCHER.Provider>
    </AUTH_CONTEXT.Provider>
  );
};
