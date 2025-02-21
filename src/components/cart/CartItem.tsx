import { Minus, Plus, Trash } from 'lucide-react';

import { useCart } from '@/stores/cart/CartContext';
import type { CartItem } from '@/types';

import styles from './CartItem.module.css';

type CartItemProps = CartItem;

export function CartDrawerItem({ description, id, image, name, stock, quantity }: CartItemProps) {
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useCart();
  return (
    <div key={id} className={styles.cartItem}>
      <img className={styles.itemImage} src={image} alt={name} />
      <div className={styles.itemDetails}>
        <h3 className={styles.itemTitle}>{name}</h3>
        <p className={`${styles.itemDescription} line-clamp line-clamp-2`}>{description}</p>
        <div className={styles.cartActions}>
          <div className={styles.quantityControls}>
            <button className={styles.quantityButton} onClick={() => decreaseQuantity(id)}>
              <Minus size={18} />
            </button>
            <span className={styles.quantity}>{quantity}</span>
            <button className={styles.quantityButton} onClick={() => increaseQuantity(id, stock)}>
              <Plus size={18} />
            </button>
          </div>
          <button className={styles.clearCartButton} onClick={() => removeFromCart(id)}>
            <Trash size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
