import ResourceSectionPage from '@/components/resources/ResourceSectionPage';

export default function Page() {
  return (
    <ResourceSectionPage
      eyebrow="Guides"
      title="Media Guides"
      description="Guides supporting media production, publishing, storytelling, broadcasting, and related workflows."
      parentLabel="Guides"
      parentHref="/resources/guides"
      resourceType="Media Guides"
      coverageAreas={["Production","Publishing","Storytelling","Broadcasting"]}
    />
  );
}
