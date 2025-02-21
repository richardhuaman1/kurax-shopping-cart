import { useCart } from '@/stores/cart/CartContext';
import { ListGenerator } from '@/utils/helper';
import { NumberUtils } from '@/utils/number';
import { isEmpty } from '@/utils/validation';

import styles from './CartDrawerContent.module.css';
import { CartEmpty } from './CartEmpty';
import { CartDrawerItem } from './CartItem';

export function CartDrawerContent() {
  const { cartItems, clearCart, subTotal } = useCart();

  if (isEmpty(cartItems)) return <CartEmpty />;

  return (
    <div className={`${styles.cartContent} smooth-scroll`}>
      <ListGenerator
        items={cartItems}
        render={props => (
          <CartDrawerItem
            key={props.id}
            id={props.id}
            category={props.category}
            createdAt={props.createdAt}
            description={props.description}
            image={props.image}
            name={props.name}
            quantity={props.quantity}
            stock={props.stock}
            unitaryPrice={props.unitaryPrice}
          />
        )}
      />

      <div className={styles.subTotal}>
        <b>Sub Total:</b>
        {NumberUtils.toCurrency(subTotal)}
      </div>
      <div className={styles.actionButton}>
        <button className={styles.resetCartButton} onClick={clearCart}>
          Clear Cart
        </button>
        <button className={styles.checkoutButton} onClick={() => {}}>
          Proceed to checkout
        </button>
      </div>
    </div>
  );
}
