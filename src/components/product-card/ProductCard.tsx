import { Star } from 'lucide-react';

import { cn } from '@/lib/helper';
import type { Product } from '@/types';
import { ListGenerator } from '@/utils/helper';

import styles from './ProductCard.module.css';

type ProductCardProps = Pick<Product, 'name' | 'image' | 'description' | 'unitaryPrice'>;

export function ProductCard({ name, description, image, unitaryPrice }: ProductCardProps) {
  return (
    <div className={styles.productCard}>
      <div className={styles.productImageContainer}>
        <img className={styles.productImage} src={image} alt={name} />
      </div>
      <div className={styles.productDetails}>
        <h3 className={cn(styles.productTitle, 'line-clamp line-clamp-1')}>{name}</h3>
        <span className={styles.productPrice}>{unitaryPrice}</span>
      </div>
      <p className={cn(styles.productDescription, 'line-clamp line-clamp-2')}>{description}</p>
      <div className={styles.productRating}>
        <ListGenerator
          items={new Array(5).fill(null)}
          render={(_, index) => <Star key={index} size={20} fill="var(--star-color)" />}
        />
      </div>
      <div className={styles.productActions}>
        <button className={styles.addToCartButton}>Add to cart</button>
      </div>
    </div>
  );
}
