import React from 'react';

import { CartProvider } from '@/stores/cart/CartContext';

import { CartDrawerProvider } from '../cart/CartDrawer.context';

type ProvidersProps = {
  children: React.ReactNode;
};

export function Providers({ children }: ProvidersProps) {
  return (
    <CartDrawerProvider>
      <CartProvider>{children}</CartProvider>
    </CartDrawerProvider>
  );
}
