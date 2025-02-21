import { createContext, useContext, useState } from 'react';

type CartDrawerContextProps = {
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
};

const CartDrawerContext = createContext<CartDrawerContextProps | null>(null);

type CartDrawerProviderProps = {
  children: React.ReactNode;
};

export function CartDrawerProvider({ children }: CartDrawerProviderProps) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  return (
    <CartDrawerContext.Provider
      value={{
        isCartOpen,
        openCart,
        closeCart,
      }}
    >
      {children}
    </CartDrawerContext.Provider>
  );
}

export const useCartDrawerContext = () => {
  const context = useContext(CartDrawerContext);
  if (!context) {
    throw new Error('useCartDrawerContext must be used within a CartDrawerProvider');
  }
  return context;
};
