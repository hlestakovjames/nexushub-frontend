import ResourceSectionPage from '@/components/resources/ResourceSectionPage';

export default function Page() {
  return (
    <ResourceSectionPage
      eyebrow="Guides"
      title="Digital Guides"
      description="Guides covering digital products, technology, online tools, innovation, and digital transformation."
      parentLabel="Guides"
      parentHref="/resources/guides"
      resourceType="Digital Guides"
      coverageAreas={["Technology","Products","Innovation","Digital transformation"]}
    />
  );
}
