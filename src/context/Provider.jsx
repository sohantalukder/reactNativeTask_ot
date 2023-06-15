import React, {createContext} from 'react';
import useProvider from '../hooks/useProvider';

export const ProviderContext = createContext(null);

const Provider = ({children}) => {
  const lists = useProvider();
  return (
    <ProviderContext.Provider value={lists}>
      {children}
    </ProviderContext.Provider>
  );
};

export default Provider;
