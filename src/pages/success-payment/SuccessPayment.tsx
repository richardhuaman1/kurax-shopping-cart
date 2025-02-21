import { CircleCheckBig } from 'lucide-react';
import { useEffect } from 'react';

import { ButtonLink } from '@/components/button-link/ButtonLink';
import { routes } from '@/config';
import { fireConfetti } from '@/utils/helper';

import styles from './SuccessPayment.module.css';

export function SuccessPaymentPage() {
  useEffect(() => {
    fireConfetti();
  }, []);

  return (
    <div className={styles.placedOrder}>
      <CircleCheckBig size={40} />
      <p>Thanks for your purchase</p>
      <ButtonLink to={routes.home}>Go Home</ButtonLink>
    </div>
  );
}
