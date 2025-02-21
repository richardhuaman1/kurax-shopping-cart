import { useCart } from '@/stores/cart/CartContext';
import { ListGenerator } from '@/utils/helper';
import { isEmpty } from '@/utils/validation';

import styles from './CartDrawerContent.module.css';
import { CartEmpty } from './CartEmpty';
import { CartDrawerItem } from './CartItem';

export function CartDrawerContent() {
  const { cartItems, clearCart } = useCart();

  if (isEmpty(cartItems)) return <CartEmpty />;

  return (
    <div className={styles.cartContent}>
      <button className={styles.resetCartButton} onClick={clearCart}>
        Clear Cart
      </button>
      <ListGenerator
        items={cartItems}
        render={({
          category,
          createdAt,
          description,
          id,
          image,
          name,
          quantity,
          stock,
          unitaryPrice,
        }) => (
          <CartDrawerItem
            key={id}
            id={id}
            category={category}
            createdAt={createdAt}
            description={description}
            image={image}
            name={name}
            quantity={quantity}
            stock={stock}
            unitaryPrice={unitaryPrice}
          />
        )}
      />
    </div>
  );
}
