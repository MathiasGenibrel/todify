import { useAuth } from '../store/auth/useAuth';

export const useRequiredAuth = () => {
  const { user } = useAuth();

  if (!user) {
    throw new Error(
      'The user must be logged in before being able to access the application',
    );
  }

  return user;
};
