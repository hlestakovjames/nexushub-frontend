import type { ReactNode } from 'react';

import SubdivisionNav from '@/components/navigation/SubdivisionNav';

export default function BusinessSolutionsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <SubdivisionNav
        sectionId="business"
        subdivisionId="solutions"
      />

      {children}
    </>
  );
}
