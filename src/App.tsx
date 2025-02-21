import { Route } from 'react-router-dom';

import { CartDrawer } from './components/cart/CartDrawer';
import { PrimaryLayout } from './components/layouts/PrimaryLayout';
import { RoutesWithNotFound } from './components/RoutesWithNotFound';
import { routes } from './config';
import { CheckoutPage } from './pages/checkout/CheckoutPage';
import { HomePage } from './pages/HomePage';
import { SuccessPaymentPage } from './pages/success-payment/SuccessPayment';

function App() {
  return (
    <>
      <PrimaryLayout>
        <RoutesWithNotFound>
          <Route path={routes.home} element={<HomePage />} />
          <Route path={routes.checkout} element={<CheckoutPage />} />
          <Route path={routes.successPayment} element={<SuccessPaymentPage />} />
        </RoutesWithNotFound>
      </PrimaryLayout>
      <CartDrawer />
    </>
  );
}

export default App;
