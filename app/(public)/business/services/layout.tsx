import type { ReactNode } from 'react';

import SubdivisionNav from '@/components/navigation/SubdivisionNav';

export default function BusinessServicesLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <SubdivisionNav
        sectionId="business"
        subdivisionId="services"
      />

      {children}
    </>
  );
}
