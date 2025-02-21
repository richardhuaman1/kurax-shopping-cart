import { useState } from 'react';

import type { Product } from '@/types';

type Props = {
  products: Product[];
  itemsPerPage?: number;
};

export function usePagination({ products, itemsPerPage = 5 }: Props) {
  const [currentPage, setCurrentPage] = useState(1);

  const updatePage = (page: number) => setCurrentPage(page);

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const index = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = products.slice(index, index + itemsPerPage);

  return { currentPage, totalPages, paginatedProducts, updatePage, setCurrentPage };
}
