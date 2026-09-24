import ResourceSectionPage from '@/components/resources/ResourceSectionPage';

export default function Page() {
  return (
    <ResourceSectionPage
      eyebrow="Documents"
      title="Report Documents"
      description="A document-oriented archive for formal reports and reporting materials."
      parentLabel="Documents"
      parentHref="/resources/documents"
      resourceType="Report Documents"
      coverageAreas={["Annual reports","Project reports","Performance reports","Research reports"]}
    />
  );
}
