import type { ReactNode } from 'react';

import SubdivisionNav from '@/components/navigation/SubdivisionNav';

export default function NexusHubTVLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <SubdivisionNav
        sectionId="media"
        subdivisionId="nexus-hub-tv"
      />

      {children}
    </>
  );
}
