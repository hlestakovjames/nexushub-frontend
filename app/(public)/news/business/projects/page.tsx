import NewsSectionPage from '@/components/news/NewsSectionPage';

export default function Page() {
  return (
    <NewsSectionPage
      eyebrow="Business News"
      title="Business Project News"
      description="Coverage of business-facing projects, delivery milestones, client work, launches, and project developments."
      parentLabel="Business"
      parentHref="/news/business"
      coverageAreas={["Business projects","Client delivery","Project milestones","Launches"]}
    />
  );
}
