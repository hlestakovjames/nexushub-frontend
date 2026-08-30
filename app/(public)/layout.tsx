import type { ReactNode } from 'react';

import Footer from '@/components/navigation/Footer';
import GlobalNav from '@/components/navigation/GlobalNav';

export default function PublicLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <GlobalNav />

      <main>{children}</main>

      <Footer />
    </>
  );
}