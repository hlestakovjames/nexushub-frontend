import NewsSectionPage from '@/components/news/NewsSectionPage';

export default function Page() {
  return (
    <NewsSectionPage
      eyebrow="Nexus Hub News"
      title="Nexus Hub Updates"
      description="A focused stream for timely Nexus Hub updates, notices, progress reports, and other organisational developments."
      parentLabel="Nexus Hub"
      parentHref="/news/nexus-hub"
      coverageAreas={["Progress updates","Notices","Milestones","General updates"]}
    />
  );
}
