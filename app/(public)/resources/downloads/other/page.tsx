import ResourceSectionPage from '@/components/resources/ResourceSectionPage';

export default function Page() {
  return (
    <ResourceSectionPage
      eyebrow="Downloads"
      title="Other Downloads"
      description="A flexible destination for useful public downloads that do not belong in another resource category."
      parentLabel="Downloads"
      parentHref="/resources/downloads"
      resourceType="Other Downloads"
      coverageAreas={["Reference files","Public assets","Supporting materials","Miscellaneous downloads"]}
    />
  );
}
