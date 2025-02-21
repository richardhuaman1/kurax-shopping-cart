import { ProductDisplay } from '@/components/product-display/ProductDisplay';
import { Spinner } from '@/components/spinner/Spinner';
import { PRODUCTS_PER_PAGE } from '@/config';
import { useGetProducts } from '@/hooks/useGetProducts';

function ProductListRenderer() {
  const { products, isLoading, error } = useGetProducts();

  if (isLoading) return <Spinner />;

  if (error) return <div>Error</div>;

  return <ProductDisplay products={products} itemsPerPage={PRODUCTS_PER_PAGE} />;
}

export function ProductList() {
  return (
    <section id="product-list">
      <ProductListRenderer />
    </section>
  );
}
