import { Star } from 'lucide-react';

import { useCart } from '@/stores/cart/CartContext';
import type { Product } from '@/types';
import { ListGenerator } from '@/utils/helper';
import { NumberUtils } from '@/utils/number';

import styles from './ProductCard.module.css';

type ProductCardProps = Product;

export function ProductCard(product: ProductCardProps) {
  const { cartItems, addToCart, removeFromCart } = useCart();
  const { description, image, name, unitaryPrice, id, stock } = product;
  const isItemInCart = cartItems.find(item => item.id === id);

  return (
    <div className={styles.productCard}>
      <div className={styles.productImageContainer}>
        <img className={styles.productImage} src={image} alt={name} />
      </div>
      <div className={styles.productDetails}>
        <h3 className={`${styles.productTitle} line-clamp line-clamp-1`}>{name}</h3>
        <span className={styles.productPrice}>{NumberUtils.toCurrency(unitaryPrice)}</span>
      </div>
      <p className={`${styles.productDescription} line-clamp line-clamp-2`}>{description}</p>
      <p className={styles.currentStock}>{NumberUtils.padWithZero(stock)} items left</p>
      <div className={styles.productRating}>
        <ListGenerator
          items={new Array(5).fill(null)}
          render={(_, index) => <Star key={index} size={20} fill="var(--star-color)" />}
        />
      </div>
      <div className={styles.productActions}>
        <button
          className={isItemInCart ? styles.removeFromCartButton : styles.addToCartButton}
          onClick={isItemInCart ? () => removeFromCart(id) : () => addToCart(product)}
        >
          {isItemInCart ? 'Remove' : 'Add to cart'}
        </button>
      </div>
    </div>
  );
}
