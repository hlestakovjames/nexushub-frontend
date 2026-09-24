import NewsSectionPage from '@/components/news/NewsSectionPage';

export default function Page() {
  return (
    <NewsSectionPage
      eyebrow="Business News"
      title="Business Growth News"
      description="Coverage of business growth, expansion, new opportunities, operational development, and significant commercial milestones."
      parentLabel="Business"
      parentHref="/news/business"
      coverageAreas={["Growth","Expansion","Opportunities","Commercial milestones"]}
    />
  );
}
