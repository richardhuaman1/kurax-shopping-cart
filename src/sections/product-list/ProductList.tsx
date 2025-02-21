import { PaginatedProductGrid } from '@/components/product-grid/PaginatedProductGrid';
import { useGetProducts } from '@/hooks/useGetProducts';

function ProductListRenderer() {
  const { products, isLoading, error } = useGetProducts();

  if (isLoading) return <div>Loading ...</div>;

  if (error) return <div>Error</div>;

  return <PaginatedProductGrid products={products} itemsPerPage={5} />;
}

export function ProductList() {
  return (
    <section id="product-list">
      <ProductListRenderer />
    </section>
  );
}
