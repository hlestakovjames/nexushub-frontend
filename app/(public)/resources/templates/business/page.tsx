import ResourceSectionPage from '@/components/resources/ResourceSectionPage';

export default function Page() {
  return (
    <ResourceSectionPage
      eyebrow="Templates"
      title="Business Templates"
      description="Reusable templates supporting business planning, communication, partnerships, proposals, and operational work."
      parentLabel="Templates"
      parentHref="/resources/templates"
      resourceType="Business Templates"
      coverageAreas={["Business planning","Proposals","Partnerships","Operations"]}
    />
  );
}
