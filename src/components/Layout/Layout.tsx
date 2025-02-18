import { ReactNode } from 'react';
import styles from './styles.module.scss';

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const { wrapLayout, container } = styles;
  return (
    <main className={wrapLayout}>
      <div className={container}>{children}</div>
    </main>
  );
}
