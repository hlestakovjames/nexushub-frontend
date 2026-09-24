import NewsSectionPage from '@/components/news/NewsSectionPage';

export default function Page() {
  return (
    <NewsSectionPage
      eyebrow="Community News"
      title="Community Updates"
      description="A focused stream for timely community updates, notices, milestones, and ongoing developments."
      parentLabel="Community"
      parentHref="/news/community"
      coverageAreas={["Community updates","Notices","Milestones","Ongoing developments"]}
    />
  );
}
