import type { CartStateType } from './cartTypes';

export const calculateSubTotal = (cartItems: CartStateType['cartItems']) =>
  cartItems.reduce((sum, item) => sum + item.quantity * item.unitaryPrice, 0);
