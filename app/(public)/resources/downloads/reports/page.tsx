import ResourceSectionPage from '@/components/resources/ResourceSectionPage';

export default function Page() {
  return (
    <ResourceSectionPage
      eyebrow="Downloads"
      title="Reports"
      description="A structured destination for published organisational, project, research, and activity reports."
      parentLabel="Downloads"
      parentHref="/resources/downloads"
      resourceType="Reports"
      coverageAreas={["Organisational reports","Project reports","Research reports","Activity reports"]}
    />
  );
}
