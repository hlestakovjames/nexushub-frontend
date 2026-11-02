import type { ReactNode } from 'react';

import Footer from '@/components/navigation/Footer';
import ScrollReveal from '@/components/motion/ScrollReveal';
import GlobalNav from '@/components/navigation/GlobalNav';

export default function PublicLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <GlobalNav />
      <ScrollReveal>
        <main>{children}</main>
      </ScrollReveal>
      <Footer />
    </>
  );
}
