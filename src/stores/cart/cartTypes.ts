import type { CartItem, Product } from '@/types';

export type CartStateType = {
  cartItems: CartItem[];
  totalItems: number;
  subTotal: number;
};

export type CartActionsType =
  | { type: 'ADD_TO_CART'; payload: Product }
  | { type: 'REMOVE_FROM_CART'; payload: Product['id'] }
  | { type: 'DECREASE_QUANTITY'; payload: Product['id'] }
  | { type: 'INCREASE_QUANTITY'; payload: { id: Product['id']; stock: number } }
  | { type: 'EDIT_QUANTITY'; payload: { id: Product['id']; quantity: number } }
  | { type: 'CLEAR_CART' };

export type CartContextType = CartStateType & {
  addToCart: (product: Product) => void;
  clearCart: () => void;
  removeFromCart: (id: Product['id']) => void;
  decreaseQuantity: (id: Product['id']) => void;
  increaseQuantity: (id: Product['id'], stock: number) => void;
  editQuantityPerItem: (id: Product['id'], quantity: number) => void;
};
