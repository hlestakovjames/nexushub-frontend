import NewsSectionPage from '@/components/news/NewsSectionPage';

export default function Page() {
  return (
    <NewsSectionPage
      eyebrow="Community News"
      title="Community Initiatives"
      description="Coverage of community initiatives, programmes, campaigns, and activities designed to engage people and communities."
      parentLabel="Community"
      parentHref="/news/community"
      coverageAreas={["Initiatives","Programmes","Campaigns","Community activities"]}
    />
  );
}
