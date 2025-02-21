import { MAX_PRODUCTS_PER_PURCHASE } from '@/config';

import type { CartActionsType, CartStateType } from './cartTypes';

export function cartReducer(state: CartStateType, action: CartActionsType): CartStateType {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const foundItem = state.cartItems.find(item => item.id === action.payload.id);
      let updatedCart;

      if (foundItem) {
        updatedCart = state.cartItems.map(item => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return item;
        });
      } else {
        updatedCart = [...state.cartItems, { ...action.payload, quantity: 1 }];
      }

      return {
        ...state,
        cartItems: updatedCart,
        totalItems: updatedCart.reduce((sum, item) => sum + item.quantity, 0),
      };
    }

    case 'REMOVE_FROM_CART': {
      const updatedCart = state.cartItems.filter(item => item.id !== action.payload);
      return {
        ...state,
        cartItems: updatedCart,
        totalItems: updatedCart.reduce((sum, item) => sum + item.quantity, 0),
      };
    }

    case 'DECREASE_QUANTITY': {
      const foundItem = state.cartItems.find(item => item.id === action.payload);

      if (!foundItem) {
        return state;
      }

      let updatedCart;

      if (foundItem.quantity > 1) {
        updatedCart = state.cartItems.map(item =>
          item.id === action.payload
            ? {
                ...item,
                quantity: item.quantity - 1,
                subTotal: (item.quantity - 1) * item.unitaryPrice,
              }
            : item,
        );
      } else {
        updatedCart = state.cartItems.filter(item => item.id !== action.payload);
      }

      return {
        ...state,
        cartItems: updatedCart,
        totalItems: updatedCart.reduce((sum, item) => sum + item.quantity, 0),
      };
    }

    case 'INCREASE_QUANTITY': {
      const foundItem = state.cartItems.find(item => item.id === action.payload.id);

      if (!foundItem) {
        return state;
      }

      if (
        foundItem.quantity >= action.payload.stock ||
        foundItem.quantity >= MAX_PRODUCTS_PER_PURCHASE
      ) {
        return state;
      }

      const updatedCart = state.cartItems.map(item => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            quantity: item.quantity + 1,
            subTotal: (item.quantity + 1) * item.unitaryPrice,
          };
        }
        return item;
      });

      return {
        ...state,
        cartItems: updatedCart,
        totalItems: updatedCart.reduce((sum, item) => sum + item.quantity, 0),
      };
    }

    case 'EDIT_QUANTITY': {
      const updatedCart = state.cartItems.map(item => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            quantity: action.payload.quantity,
          };
        }
        return item;
      });

      return {
        ...state,
        cartItems: updatedCart,
        totalItems: updatedCart.reduce((sum, item) => sum + item.quantity, 0),
      };
    }

    case 'CLEAR_CART':
      return {
        cartItems: [],
        totalItems: 0,
      };

    default:
      return state;
  }
}
