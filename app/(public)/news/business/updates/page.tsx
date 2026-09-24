import NewsSectionPage from '@/components/news/NewsSectionPage';

export default function Page() {
  return (
    <NewsSectionPage
      eyebrow="Business News"
      title="Business Updates"
      description="A focused stream for timely business updates, developments, announcements, and ongoing commercial activity."
      parentLabel="Business"
      parentHref="/news/business"
      coverageAreas={["Business developments","Announcements","Ongoing activity","Milestones"]}
    />
  );
}
