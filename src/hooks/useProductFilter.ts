import { useState } from 'react';

import type { Product } from '@/types';
import type { ProductCategory } from '@/utils/enums';

export function useProductFilter(products: Product[]) {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'All'>('All');

  const filteredProducts =
    selectedCategory === 'All'
      ? products
      : products.filter(product => product.category === selectedCategory);

  return { filteredProducts, selectedCategory, setSelectedCategory };
}
