import ResourceSectionPage from '@/components/resources/ResourceSectionPage';

export default function GuidesPage() {
  return (
    <ResourceSectionPage
      eyebrow="Resources"
      title="Guides"
      description="Practical guides and instructional resources covering digital, business, media, community, and how-to topics."
      parentLabel="Resources"
      parentHref="/resources"
      resourceType="Guides"
      coverageAreas={[
        'Digital',
        'Business',
        'Media',
        'Community',
        'How-to',
      ]}
    />
  );
}
