import ResourceSectionPage from '@/components/resources/ResourceSectionPage';

export default function Page() {
  return (
    <ResourceSectionPage
      eyebrow="Templates"
      title="Media Templates"
      description="Templates supporting media planning, production, publishing, editorial workflows, and communications."
      parentLabel="Templates"
      parentHref="/resources/templates"
      resourceType="Media Templates"
      coverageAreas={["Production planning","Editorial work","Publishing","Media communications"]}
    />
  );
}
