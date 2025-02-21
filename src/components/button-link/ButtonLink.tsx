import { Link } from 'react-router-dom'; // Or "next/link" for Next.js

import { routes } from '@/config';

import styles from './ButtonLink.module.css'; // Assuming CSS module

type ButtonLinkProps = {
  to: string;
  children: React.ReactNode;
};

export function ButtonLink({ children, to = routes.home }: ButtonLinkProps) {
  return (
    <Link to={to} className={styles.buttonLink}>
      {children}
    </Link>
  );
}
