import React, { createContext, ReactNode, useContext, useState } from "react";

const QuantityContext = createContext<{ 
  totalQuantity: number; 
  setTotalQuantity: React.Dispatch<React.SetStateAction<number>>; 
} | undefined>(undefined);

interface QuantityProviderProps {
  children: ReactNode;
}

const QuantityProvider = ({ children }: QuantityProviderProps) => {
  const [totalQuantity, setTotalQuantity] = useState(0);

  return (
    <QuantityContext.Provider value={{ totalQuantity, setTotalQuantity }}>
      {children}
    </QuantityContext.Provider>
  );
}

export const useQuantity = () => {
  const context = useContext(QuantityContext);
  if (!context) {
    throw new Error('useQuantity must be used within a QuantityProvider');
  }
  return context;
}

export { QuantityProvider }