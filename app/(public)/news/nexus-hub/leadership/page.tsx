import NewsSectionPage from '@/components/news/NewsSectionPage';

export default function Page() {
  return (
    <NewsSectionPage
      eyebrow="Nexus Hub News"
      title="Leadership News"
      description="A dedicated editorial space for leadership updates, executive developments, organisational direction, and leadership initiatives."
      parentLabel="Nexus Hub"
      parentHref="/news/nexus-hub"
      coverageAreas={["Leadership updates","Executive developments","Direction and strategy","Leadership initiatives"]}
    />
  );
}
