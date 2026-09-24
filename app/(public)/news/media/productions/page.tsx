import NewsSectionPage from '@/components/news/NewsSectionPage';

export default function Page() {
  return (
    <NewsSectionPage
      eyebrow="Media News"
      title="Media Productions News"
      description="A broader editorial space for productions, production milestones, new formats, creative work, and media initiatives."
      parentLabel="Media"
      parentHref="/news/media"
      coverageAreas={["Productions","Creative work","New formats","Production milestones"]}
    />
  );
}
