import { ShoppingCart } from 'lucide-react';

import styles from './CartEmpty.module.css';

export function CartEmpty() {
  return (
    <div className={styles.emptyCart}>
      <ShoppingCart size={30} />
      Your shopping cart is empty
    </div>
  );
}
