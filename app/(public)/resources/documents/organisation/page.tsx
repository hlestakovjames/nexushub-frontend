import ResourceSectionPage from '@/components/resources/ResourceSectionPage';

export default function Page() {
  return (
    <ResourceSectionPage
      eyebrow="Documents"
      title="Organisation Documents"
      description="Public documents relating to Nexus Hub structure, operations, governance, and organisational information."
      parentLabel="Documents"
      parentHref="/resources/documents"
      resourceType="Organisation Documents"
      coverageAreas={["Organisation information","Governance","Operations","Public records"]}
    />
  );
}
