import NewsSectionPage from '@/components/news/NewsSectionPage';

export default function Page() {
  return (
    <NewsSectionPage
      eyebrow="Business News"
      title="Partnership News"
      description="Coverage of partnerships, collaborations, strategic relationships, and joint initiatives involving Nexus Hub."
      parentLabel="Business"
      parentHref="/news/business"
      coverageAreas={["Partnerships","Collaborations","Strategic relationships","Joint initiatives"]}
    />
  );
}
