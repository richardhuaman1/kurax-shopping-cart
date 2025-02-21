import { CartButton } from '@/components/cart/CartButton';
import { routes } from '@/config';

import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <a href={routes.home}>Shopping Cart</a>
      <CartButton />
    </header>
  );
}
