import { useReducer } from 'react';
import { CartContext } from './cartContext';
import { reducerCart, intialStateCart } from '@/reducers/cart';

function useCartReducer() {
  const [state, dispatch] = useReducer(reducerCart, intialStateCart);

  const addProduct = (product) =>
    dispatch({
      type: 'ADD_TO_CART',
      payload: product,
    });

  const removeProduct = (product) =>
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: product,
    });

  const clearCart = () => dispatch({ type: 'CLEAR_CART' });

  return { state, addProduct, removeProduct, clearCart };
}

//Componente que provee la informacion del context
export function CartProvider({ children }) {
  const { state, addProduct, removeProduct, clearCart } = useCartReducer();

  return (
    <CartContext.Provider
      value={{ cart: state, addProduct, removeProduct, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
