import { ProductGrid } from '@/components/product-grid/ProductGrid';
import { useGetProducts } from '@/hooks/useGetProducts';

function ProductListRenderer() {
  const { products, isLoading, error } = useGetProducts();

  if (isLoading) return <div>Loading ...</div>;

  if (error) return <div>Error</div>;

  return <ProductGrid products={products} />;
}

export function ProductList() {
  return (
    <section id="product-list">
      <ProductListRenderer />
    </section>
  );
}
