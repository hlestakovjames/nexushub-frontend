import ResourceSectionPage from '@/components/resources/ResourceSectionPage';

export default function Page() {
  return (
    <ResourceSectionPage
      eyebrow="Templates"
      title="Form Templates"
      description="Reusable templates for creating structured forms, questionnaires, applications, and information-collection workflows."
      parentLabel="Templates"
      parentHref="/resources/templates"
      resourceType="Form Templates"
      coverageAreas={["Questionnaires","Applications","Registration forms","Information collection"]}
    />
  );
}
