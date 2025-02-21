import { useCart } from '@/stores/cart/CartContext';
import { isEmpty } from '@/utils/validation';

import styles from './CheckoutPage.module.css';
import { CheckoutReview } from './CheckoutReview';
import { EmptyCard } from './EmptyCart';

export function CheckoutPage() {
  const { cartItems } = useCart();

  return (
    <div className={styles.checkoutContainer}>
      <h2 className={styles.title}>Checkout</h2>
      {isEmpty(cartItems) ? <EmptyCard /> : <CheckoutReview />}
    </div>
  );
}
