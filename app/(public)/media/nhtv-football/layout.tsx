import type { ReactNode } from 'react';

import SubdivisionNav from '@/components/navigation/SubdivisionNav';

export default function NHTVFootballLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <SubdivisionNav
        sectionId="media"
        subdivisionId="nhtv-football"
      />

      {children}
    </>
  );
}
