import { FiltersContext } from './filterContext';
import { useState } from 'react';

//2. El Componente que lo envuelve
export function FiltersProvider({ children }) {
  const [filters, setFilters] = useState({ category: 'all', minPrice: 0 });
  return (
    <FiltersContext.Provider value={{ filters, setFilters }}>
      {children}
    </FiltersContext.Provider>
  );
}
