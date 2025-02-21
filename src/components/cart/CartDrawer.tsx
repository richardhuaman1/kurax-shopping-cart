import { Drawer } from '../common/drawer/Drawer';
import { useCartDrawerContext } from './CartDrawer.context';
import styles from './CartDrawer.module.css';
import { CartDrawerContent } from './CartDrawerContent';

export function CartDrawer() {
  const { isCartOpen, closeCart } = useCartDrawerContext();

  return (
    <Drawer direction="right" open={isCartOpen} duration={500} onClose={closeCart}>
      <div className={styles.cartDrawer}>
        <CartDrawerContent />
      </div>
    </Drawer>
  );
}
