import { usePagination } from '@/hooks/usePagination';
import { useProductFilter } from '@/hooks/useProductFilter';
import type { Product } from '@/types';

import { ProductFilter } from '../product-filter/ProductFilter';
import { ProductGrid } from '../product-grid/ProductGrid';
import { ProductPagination } from '../product-pagination/ProductPagination';

type ProductDisplayProps = {
  products: Product[];
  itemsPerPage?: number;
};

export function ProductDisplay({ products, itemsPerPage = 5 }: ProductDisplayProps) {
  const { filteredProducts, selectedCategory, setSelectedCategory } = useProductFilter(products);
  const { currentPage, paginatedProducts, totalPages, setCurrentPage } = usePagination({
    products: filteredProducts,
    itemsPerPage,
  });

  return (
    <>
      <ProductFilter selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />
      <ProductGrid products={paginatedProducts} />
      <ProductPagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </>
  );
}
