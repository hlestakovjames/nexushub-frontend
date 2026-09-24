import NewsSectionPage from '@/components/news/NewsSectionPage';

export default function Page() {
  return (
    <NewsSectionPage
      eyebrow="Digital News"
      title="Product News"
      description="Coverage of digital products, platforms, releases, product milestones, and developments across the Nexus Hub digital portfolio."
      parentLabel="Digital"
      parentHref="/news/digital"
      coverageAreas={["Product launches","Platform updates","Releases","Product milestones"]}
    />
  );
}
