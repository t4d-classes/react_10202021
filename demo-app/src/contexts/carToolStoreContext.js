import { createContext, useContext } from 'react';

import { useCarToolStore } from '../hooks/useCarToolStore';

const carToolStoreContext = createContext();

export const CarToolStoreProvider = ({ cars: initialCars, children }) => {

  return <carToolStoreContext.Provider value={useCarToolStore(initialCars)}>
    {children}
  </carToolStoreContext.Provider>;

};

export const useCarToolStoreContext = () => {

  // consumer
  return useContext(carToolStoreContext);

};
