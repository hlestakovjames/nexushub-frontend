import type { ReactNode } from 'react';

import GlobalNav from '@/components/navigation/GlobalNav';
import SectionNav from '@/components/navigation/SectionNav';
import SubdivisionNav from '@/components/navigation/SubdivisionNav';

type SiteShellProps = {
  children: ReactNode;

  sectionId?: string;

  subdivisionId?: string;
};

export default function SiteShell({
  children,
  sectionId,
  subdivisionId,
}: SiteShellProps) {
  return (
    <div className="min-h-screen bg-white text-[#050A30]">
      <GlobalNav sectionId={sectionId} />

      {sectionId && (
        <SectionNav sectionId={sectionId} />
      )}

      {sectionId && subdivisionId && (
        <SubdivisionNav
          sectionId={sectionId}
          subdivisionId={subdivisionId}
        />
      )}

      <main>{children}</main>
    </div>
  );
}