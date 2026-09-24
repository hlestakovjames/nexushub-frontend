import ResourceSectionPage from '@/components/resources/ResourceSectionPage';

export default function DownloadsPage() {
  return (
    <ResourceSectionPage
      eyebrow="Resources"
      title="Downloads"
      description="A dedicated destination for downloadable publications, reports, media kits, forms, and other public resource files."
      parentLabel="Resources"
      parentHref="/resources"
      resourceType="Downloads"
      coverageAreas={[
        'Publications',
        'Reports',
        'Media kits',
        'Forms',
        'Other downloads',
      ]}
    />
  );
}
