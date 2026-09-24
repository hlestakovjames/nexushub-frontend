import NewsSectionPage from '@/components/news/NewsSectionPage';

export default function Page() {
  return (
    <NewsSectionPage
      eyebrow="Business News"
      title="Client News"
      description="A dedicated editorial space for client-related developments, project engagements, major milestones, and business stories."
      parentLabel="Business"
      parentHref="/news/business"
      coverageAreas={["Client developments","Engagements","Delivery milestones","Client stories"]}
    />
  );
}
