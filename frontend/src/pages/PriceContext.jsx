import { createContext, useContext, useState } from 'react';

const PriceContext = createContext();

export function PriceProvider({ children }) {
  const initialPrices = {
    item1: 1000,
    item2: 1500,
    item3: 1500,
    item4: 1500,
    item5: 1500,
    item6: 1500,
    item7: 1500,
    item8: 1500,
    item9: 1500,
    item10: 1500,
  };

  const [prices, setPrices] = useState(initialPrices);

  return (
    <PriceContext.Provider value={{ prices, setPrices }}>
      {children}
    </PriceContext.Provider>
  );
}

export function usePrice() {
  return useContext(PriceContext);
}