import type { Product } from '@/types';
import { ListGenerator } from '@/utils/helper';

import { ProductCard } from '../product-card/ProductCard';
import styles from './ProductGrid.module.css';

type ProductGridProps = {
  products: Product[];
};

export function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className={styles.productGrid}>
      <ListGenerator
        items={products}
        render={({ id, name, description, image, unitaryPrice }) => (
          <ProductCard
            key={id}
            name={name}
            description={description}
            image={image}
            unitaryPrice={unitaryPrice}
          />
        )}
      />
    </div>
  );
}
