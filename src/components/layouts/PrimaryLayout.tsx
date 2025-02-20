import { Footer } from './footer/Footer';
import { Header } from './header/Header';
import styles from './PrimaryLayout.module.css';

type PrimaryLayoutProps = {
  children: React.ReactNode;
};

export function PrimaryLayout({ children }: PrimaryLayoutProps) {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
}
