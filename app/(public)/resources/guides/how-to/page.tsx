import ResourceSectionPage from '@/components/resources/ResourceSectionPage';

export default function Page() {
  return (
    <ResourceSectionPage
      eyebrow="Guides"
      title="How-To Guides"
      description="Step-by-step instructional resources for completing practical tasks and processes."
      parentLabel="Guides"
      parentHref="/resources/guides"
      resourceType="How-To Guides"
      coverageAreas={["Step-by-step instructions","Processes","Practical tasks","Learning resources"]}
    />
  );
}
