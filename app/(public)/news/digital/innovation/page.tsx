import NewsSectionPage from '@/components/news/NewsSectionPage';

export default function Page() {
  return (
    <NewsSectionPage
      eyebrow="Digital News"
      title="Innovation News"
      description="Editorial coverage of new ideas, experiments, approaches, and innovations shaping the digital work of Nexus Hub."
      parentLabel="Digital"
      parentHref="/news/digital"
      coverageAreas={["New ideas","Experiments","Innovation initiatives","Emerging approaches"]}
    />
  );
}
