import { usePagination } from '@/hooks/usePagination';
import type { Product } from '@/types';

import styles from './PaginatedProductGrid.module.css';
import { ProductGrid } from './ProductGrid';

type PaginatedProductGridProps = {
  products: Product[];
  itemsPerPage?: number;
};

export function PaginatedProductGrid({ products, itemsPerPage = 5 }: PaginatedProductGridProps) {
  const { currentPage, paginatedProducts, totalPages, setCurrentPage } = usePagination({
    products,
    itemsPerPage,
  });

  return (
    <>
      <ProductGrid products={paginatedProducts} />
      <div className={styles.paginationControls}>
        <button
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </>
  );
}
