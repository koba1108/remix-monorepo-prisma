import React, {createContext, useState, useEffect} from 'react';
import {initializeApp, FirebaseApp, FirebaseOptions} from 'firebase/app'
import {getAuth, Auth} from 'firebase/auth'

export interface FirebaseContextState {
  app: FirebaseApp,
  auth: Auth
}

export interface FirebaseProviderConfig extends FirebaseOptions {
  tenantId: string;
}

export interface FirebaseProviderProps {
  config: FirebaseProviderConfig,
  children: React.ReactNode
}

function getAuthTenant(app: FirebaseApp, tenantId: string): Auth {
  const auth = getAuth(app);
  auth.tenantId = tenantId
  return auth
}

export const FirebaseContext = createContext<FirebaseContextState>({
  app: {} as FirebaseApp,
  auth: {} as Auth,
});

export function FirebaseProvider({config, children}: FirebaseProviderProps) {
  const [
    state,
    setState
  ] = useState<FirebaseContextState>({
    app: {} as FirebaseApp,
    auth: {} as Auth,
  });

  useEffect(() => {
    const app = initializeApp(config);
    const auth = getAuthTenant(app, config.tenantId);
    setState({
      app,
      auth,
    });
  }, [config]);

  return (
    <FirebaseContext.Provider value={state}>
      {children}
    </FirebaseContext.Provider>
  );
}

export default FirebaseContext;
