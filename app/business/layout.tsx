import type { ReactNode } from 'react';

import SectionNav from '@/components/navigation/SectionNav';

export default function BusinessLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <SectionNav sectionId="business" />

      {children}
    </>
  );
}
