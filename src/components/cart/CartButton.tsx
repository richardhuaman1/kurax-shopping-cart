import { ShoppingBag } from 'lucide-react';

import { useCart } from '@/stores/cart/CartContext';

import styles from './CartButton.module.css';
import { useCartDrawerContext } from './CartDrawer.context';

export function CartButton() {
  const { openCart } = useCartDrawerContext();
  const { totalItems } = useCart();

  return (
    <button onClick={openCart} className={styles.cartButton}>
      <ShoppingBag size={22} />
      {totalItems > 0 && <span className={styles.cartBadge}>{totalItems}</span>}
    </button>
  );
}
