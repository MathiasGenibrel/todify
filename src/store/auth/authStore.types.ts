export type UserState = {
  email: string;
  emailVerified: boolean;
  id: string;
};

export type ActionProps = {
  type: string;
  payload?: UserState;
};

export type AuthState = {
  isLogged: boolean;
  user?: UserState;
};

export type AuthDispatcherState = {
  loginUser: (user: UserState) => void;
  logoutUser: () => void;
};

export type AuthStoreProps = {
  children: JSX.Element | JSX.Element[];
};

export enum ActionType {
  LOGIN = 'login',
  LOGOUT = 'logout',
}
