import { ShoppingBag } from 'lucide-react';

import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <p>Shopping Cart</p>
      <ShoppingBag size={22} />
    </header>
  );
}
