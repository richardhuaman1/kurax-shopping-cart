import type { ReactNode } from 'react';
import { createContext, useContext, useReducer } from 'react';

import type { CartItem, Product } from '@/types';

import { CartActions } from './cartActions';
import { cartReducer } from './cartReducer';
import type { CartContextType, CartStateType } from './cartTypes';

const initialState: CartStateType = {
  cartItems: [],
  totalItems: 0,
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (items: CartItem) => dispatch(CartActions.addToCart(items));
  const clearCart = () => dispatch(CartActions.clearCart());
  const removeFromCart = (id: Product['id']) => dispatch(CartActions.removeFromCart(id));
  const decreaseQuantity = (id: Product['id']) => dispatch(CartActions.decreaseQuantity(id));
  const increaseQuantity = (id: Product['id'], stock: number) =>
    dispatch(CartActions.increaseQuantity(id, stock));
  const editQuantityPerItem = (id: Product['id'], quantity: number) =>
    dispatch(CartActions.editQuantityPerItem(id, quantity));

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        clearCart,
        removeFromCart,
        editQuantityPerItem,
        decreaseQuantity,
        increaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
