import { useNavigate } from 'react-router-dom';

import { routes } from '@/config';
import { useCart } from '@/stores/cart/CartContext';
import { ListGenerator } from '@/utils/helper';
import { NumberUtils } from '@/utils/number';

import styles from './CheckoutPage.module.css';

export function CheckoutReview() {
  const { cartItems, subTotal, clearCart } = useCart();
  const navigate = useNavigate();
  return (
    <div className={styles.cartList}>
      <ListGenerator
        items={cartItems}
        render={({ id, name, description, quantity, unitaryPrice }) => {
          return (
            <div key={id} className={styles.cartItem}>
              <div className={styles.itemDetails}>
                <h3 className={styles.itemName}>{name}</h3>
                <p className={styles.itemDescription}>{description}</p>
              </div>
              <div className={styles.itemInfo}>
                <span className={styles.itemPrice}>{NumberUtils.toCurrency(unitaryPrice)}</span>
                <span className={styles.itemQuantity}>x{quantity}</span>
                <span className={styles.itemSubTotal}>
                  {NumberUtils.toCurrency(unitaryPrice * quantity)}
                </span>
              </div>
            </div>
          );
        }}
      />
      <div className={styles.totalAmount}>
        <h3>Total: {NumberUtils.toCurrency(subTotal)}</h3>
      </div>
      <button
        className={styles.placeOrderButton}
        onClick={() => {
          navigate(routes.successPayment);
          clearCart();
        }}
      >
        Place Order
      </button>
    </div>
  );
}
