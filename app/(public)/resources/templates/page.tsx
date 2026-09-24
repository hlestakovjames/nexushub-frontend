import ResourceSectionPage from '@/components/resources/ResourceSectionPage';

export default function TemplatesPage() {
  return (
    <ResourceSectionPage
      eyebrow="Resources"
      title="Templates"
      description="Reusable templates that can support business work, projects, media production, organisational tasks, and forms."
      parentLabel="Resources"
      parentHref="/resources"
      resourceType="Templates"
      coverageAreas={[
        'Business',
        'Projects',
        'Media',
        'Organisation',
        'Forms',
      ]}
    />
  );
}
