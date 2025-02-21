import type { CartItem, Product } from '@/types';

const addToCart = (product: CartItem) =>
  ({
    type: 'ADD_TO_CART',
    payload: product,
  }) as const;

const removeFromCart = (id: Product['id']) =>
  ({
    type: 'REMOVE_FROM_CART',
    payload: id,
  }) as const;

const decreaseQuantity = (id: Product['id']) =>
  ({
    type: 'DECREASE_QUANTITY',
    payload: id,
  }) as const;

const increaseQuantity = (id: Product['id'], stock: number) =>
  ({
    type: 'INCREASE_QUANTITY',
    payload: { id, stock },
  }) as const;

const editQuantityPerItem = (id: Product['id'], quantity: number) =>
  ({
    type: 'EDIT_QUANTITY',
    payload: { id, quantity },
  }) as const;

const clearCart = () => ({ type: 'CLEAR_CART' }) as const;

export const CartActions = {
  addToCart,
  removeFromCart,
  editQuantityPerItem,
  clearCart,
  decreaseQuantity,
  increaseQuantity,
};
