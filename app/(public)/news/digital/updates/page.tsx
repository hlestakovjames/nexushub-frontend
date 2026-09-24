import NewsSectionPage from '@/components/news/NewsSectionPage';

export default function Page() {
  return (
    <NewsSectionPage
      eyebrow="Digital News"
      title="Digital Updates"
      description="A focused stream for timely updates across Nexus Hub digital products, technology work, innovation, and transformation."
      parentLabel="Digital"
      parentHref="/news/digital"
      coverageAreas={["Platform updates","Technology updates","Innovation updates","General digital developments"]}
    />
  );
}
