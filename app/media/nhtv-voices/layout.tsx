import type { ReactNode } from 'react';

import SubdivisionNav from '@/components/navigation/SubdivisionNav';

export default function NHTVVoicesLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <SubdivisionNav
        sectionId="media"
        subdivisionId="nhtv-voices"
      />

      {children}
    </>
  );
}
