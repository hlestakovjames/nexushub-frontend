import type { ReactNode } from 'react';

import SectionNav from '@/components/navigation/SectionNav';

export default function MediaLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <SectionNav sectionId="media" />

      {children}
    </>
  );
}
