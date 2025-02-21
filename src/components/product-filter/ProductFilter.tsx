import { ProductCategory } from '@/utils/enums';

import styles from './ProductFilter.module.css';

type ProductFilterProps = {
  selectedCategory: ProductCategory | 'All';
  onSelectCategory: (category: ProductCategory | 'All') => void;
};

export function ProductFilter({ selectedCategory, onSelectCategory }: ProductFilterProps) {
  return (
    <div className={styles.filterContainer}>
      <select
        value={selectedCategory}
        onChange={e => onSelectCategory(e.target.value as ProductCategory | 'All')}
      >
        <option value="All">All Categories</option>
        {Object.values(ProductCategory).map(category => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}
