import { useContext } from 'react';
import { CartContext } from '@/context/cartContext.js';

export const useCart = () => {
  const context = useContext(CartContext);

  if (context === undefined) {
    throw new Error('No hay contexto del carro');
  }

  return context;
};
