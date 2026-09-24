import NewsSectionPage from '@/components/news/NewsSectionPage';

export default function Page() {
  return (
    <NewsSectionPage
      eyebrow="Nexus Hub News"
      title="Organisation News"
      description="Coverage of organisational developments, internal milestones, strategic direction, and major updates from Nexus Hub."
      parentLabel="Nexus Hub"
      parentHref="/news/nexus-hub"
      coverageAreas={["Organisational developments","Milestones","Strategic direction","Corporate updates"]}
    />
  );
}
