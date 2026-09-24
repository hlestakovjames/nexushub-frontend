import NewsSectionPage from '@/components/news/NewsSectionPage';

export default function Page() {
  return (
    <NewsSectionPage
      eyebrow="Nexus Hub News"
      title="Ecosystem News"
      description="Stories connecting developments across the wider Nexus Hub ecosystem, properties, initiatives, and collaborations."
      parentLabel="Nexus Hub"
      parentHref="/news/nexus-hub"
      coverageAreas={["Ecosystem developments","Property updates","Collaborations","Cross-platform initiatives"]}
    />
  );
}
