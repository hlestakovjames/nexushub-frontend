import ResourceSectionPage from '@/components/resources/ResourceSectionPage';

export default function Page() {
  return (
    <ResourceSectionPage
      eyebrow="Downloads"
      title="Publications"
      description="Published reports, papers, publications, brochures, and other formal resource materials."
      parentLabel="Downloads"
      parentHref="/resources/downloads"
      resourceType="Publications"
      coverageAreas={["Publications","Papers","Brochures","Published materials"]}
    />
  );
}
