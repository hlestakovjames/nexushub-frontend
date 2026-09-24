import ResourceSectionPage from '@/components/resources/ResourceSectionPage';

export default function Page() {
  return (
    <ResourceSectionPage
      eyebrow="Documents"
      title="Policies"
      description="A dedicated public location for published Nexus Hub policies, standards, and policy-related materials."
      parentLabel="Documents"
      parentHref="/resources/documents"
      resourceType="Policies"
      coverageAreas={["Policies","Standards","Procedures","Policy updates"]}
    />
  );
}
