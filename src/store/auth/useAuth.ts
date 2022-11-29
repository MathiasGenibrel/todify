import { useContext } from 'react';
import { AUTH_CONTEXT } from './authStore';

export const useAuth = () => {
  const authContext = useContext(AUTH_CONTEXT);

  if (!authContext) {
    throw new Error(
      'This context us used outside its scope. It must be in the AUTH_CONTEXT.Provide',
    );
  }

  return { ...authContext };
};
