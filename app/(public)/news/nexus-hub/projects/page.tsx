import NewsSectionPage from '@/components/news/NewsSectionPage';

export default function Page() {
  return (
    <NewsSectionPage
      eyebrow="Nexus Hub News"
      title="Project News"
      description="Coverage of projects undertaken by Nexus Hub, including launches, milestones, delivery progress, and project outcomes."
      parentLabel="Nexus Hub"
      parentHref="/news/nexus-hub"
      coverageAreas={["Project launches","Milestones","Delivery progress","Project outcomes"]}
    />
  );
}
