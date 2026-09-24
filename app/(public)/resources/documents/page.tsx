import ResourceSectionPage from '@/components/resources/ResourceSectionPage';

export default function DocumentsPage() {
  return (
    <ResourceSectionPage
      eyebrow="Resources"
      title="Documents"
      description="A structured public document library for organisation materials, policies, reports, legal documents, and other published documents."
      parentLabel="Resources"
      parentHref="/resources"
      resourceType="Documents"
      coverageAreas={[
        'Organisation',
        'Policies',
        'Reports',
        'Legal',
        'Public documents',
      ]}
    />
  );
}
