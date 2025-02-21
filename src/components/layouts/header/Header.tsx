import { CartButton } from '@/components/cart/CartButton';

import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <p>Shopping Cart</p>
      <CartButton />
    </header>
  );
}
