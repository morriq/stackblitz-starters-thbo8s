import { createContext, useContext, useMemo } from 'react';

const RuntimeVariablesContext = createContext(null);

export function RuntimeVariablesProvider({ children }) {
  const variables = {
    gateway: (window as any).GATEWAY,
  };

  const value = useMemo(() => variables, [variables]);

  return (
    <RuntimeVariablesContext.Provider value={value}>
      {children}
    </RuntimeVariablesContext.Provider>
  );
}

export default function useRuntimeVariables() {
  const context = useContext(RuntimeVariablesContext);

  if (!context) {
    throw new Error(
      'useRuntimeVariables must be used within a RuntimeVariablesProvider'
    );
  }

  return context;
}
