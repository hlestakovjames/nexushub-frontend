import ResourceSectionPage from '@/components/resources/ResourceSectionPage';

export default function Page() {
  return (
    <ResourceSectionPage
      eyebrow="Documents"
      title="Public Documents"
      description="General public documents that do not require placement in a more specialised document category."
      parentLabel="Documents"
      parentHref="/resources/documents"
      resourceType="Public Documents"
      coverageAreas={["Public information","Reference documents","Notices","General documents"]}
    />
  );
}
