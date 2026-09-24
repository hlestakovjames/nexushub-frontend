import ResourceSectionPage from '@/components/resources/ResourceSectionPage';

export default function Page() {
  return (
    <ResourceSectionPage
      eyebrow="Templates"
      title="Organisation Templates"
      description="Reusable organisational templates for internal processes, communication, administration, and structured work."
      parentLabel="Templates"
      parentHref="/resources/templates"
      resourceType="Organisation Templates"
      coverageAreas={["Administration","Communication","Internal processes","Organisation work"]}
    />
  );
}
