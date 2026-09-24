import ResourceSectionPage from '@/components/resources/ResourceSectionPage';

export default function Page() {
  return (
    <ResourceSectionPage
      eyebrow="Documents"
      title="Legal Documents"
      description="A controlled public destination for legal and compliance documents intended for public access."
      parentLabel="Documents"
      parentHref="/resources/documents"
      resourceType="Legal Documents"
      coverageAreas={["Legal materials","Compliance","Notices","Public legal information"]}
    />
  );
}
