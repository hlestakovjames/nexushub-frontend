import ResourceSectionPage from '@/components/resources/ResourceSectionPage';

export default function Page() {
  return (
    <ResourceSectionPage
      eyebrow="Guides"
      title="Business Guides"
      description="Practical resources for business development, partnerships, projects, operations, and growth."
      parentLabel="Guides"
      parentHref="/resources/guides"
      resourceType="Business Guides"
      coverageAreas={["Business development","Partnerships","Projects","Growth"]}
    />
  );
}
