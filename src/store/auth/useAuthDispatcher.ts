import { useContext } from 'react';
import { AUTH_CONTEXT_DISPATCHER } from './authStore';

export const useAuthDispatcher = () => {
  const authDispatcherContext = useContext(AUTH_CONTEXT_DISPATCHER);

  if (!authDispatcherContext) {
    throw new Error(
      'This context us used outside its scope. It must be in the AUTH_CONTEXT_DISPATCHER.Provide',
    );
  }

  return { ...authDispatcherContext };
};
