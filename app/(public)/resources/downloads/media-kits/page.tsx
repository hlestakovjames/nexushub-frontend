import ResourceSectionPage from '@/components/resources/ResourceSectionPage';

export default function Page() {
  return (
    <ResourceSectionPage
      eyebrow="Downloads"
      title="Media Kits"
      description="Downloadable media and communication materials prepared for Nexus Hub properties and initiatives."
      parentLabel="Downloads"
      parentHref="/resources/downloads"
      resourceType="Media Kits"
      coverageAreas={["Brand assets","Media information","Press materials","Communication kits"]}
    />
  );
}
