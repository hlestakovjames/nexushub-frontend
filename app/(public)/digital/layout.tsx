import type { ReactNode } from 'react';

import SectionNav from '@/components/navigation/SectionNav';

export default function DigitalLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <SectionNav sectionId="digital" />

      {children}
    </>
  );
}