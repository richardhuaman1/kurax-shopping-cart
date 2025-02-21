import { CartDrawer } from './components/cart/CartDrawer';
import { PrimaryLayout } from './components/layouts/PrimaryLayout';
import { ProductList } from './sections/product-list/ProductList';

function App() {
  return (
    <>
      <PrimaryLayout>
        <ProductList />
      </PrimaryLayout>
      <CartDrawer />
    </>
  );
}

export default App;
