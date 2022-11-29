import React from 'react';

import { AuthStore } from './src/store/auth/authStore';
import { Router } from './src/router/router';

const App = () => {
  return (
    <AuthStore>
      <Router />
    </AuthStore>
  );
};
export default App;
