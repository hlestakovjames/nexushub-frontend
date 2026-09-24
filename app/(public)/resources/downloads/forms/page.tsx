import ResourceSectionPage from '@/components/resources/ResourceSectionPage';

export default function Page() {
  return (
    <ResourceSectionPage
      eyebrow="Downloads"
      title="Forms"
      description="Publicly available downloadable forms for applications, registrations, requests, and other processes."
      parentLabel="Downloads"
      parentHref="/resources/downloads"
      resourceType="Forms"
      coverageAreas={["Applications","Registrations","Requests","Administrative forms"]}
    />
  );
}
