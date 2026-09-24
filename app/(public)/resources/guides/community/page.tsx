import ResourceSectionPage from '@/components/resources/ResourceSectionPage';

export default function Page() {
  return (
    <ResourceSectionPage
      eyebrow="Guides"
      title="Community Guides"
      description="Guides designed to support community engagement, initiatives, participation, and impact-focused work."
      parentLabel="Guides"
      parentHref="/resources/guides"
      resourceType="Community Guides"
      coverageAreas={["Engagement","Initiatives","Participation","Community impact"]}
    />
  );
}
