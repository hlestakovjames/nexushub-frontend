import ResourceSectionPage from '@/components/resources/ResourceSectionPage';

export default function Page() {
  return (
    <ResourceSectionPage
      eyebrow="Templates"
      title="Project Templates"
      description="Reusable templates supporting project planning, documentation, delivery, reporting, and review."
      parentLabel="Templates"
      parentHref="/resources/templates"
      resourceType="Project Templates"
      coverageAreas={["Project planning","Documentation","Reporting","Project review"]}
    />
  );
}
