import { CartContext } from './cartContext';
import { useState } from 'react';

//2. El Componente que lo envuelve
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addProduct = (product) => {
    const productInCart = cart.findIndex((item) => item.id == product.id);
    if (productInCart >= 0) {
      const newCart = structuredClone(cart);
      newCart[productInCart].quantity += 1;
      return setCart(newCart);
    }
    setCart((prevState) => [
      ...prevState,
      {
        ...product,
        quantity: 1,
      },
    ]);
  };

  const removeProduct = (product) => {
    return setCart((prevState) =>
      prevState.filter((item) => item.id !== product.id)
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, setCart, addProduct, removeProduct, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
