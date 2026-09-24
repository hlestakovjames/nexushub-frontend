import NewsSectionPage from '@/components/news/NewsSectionPage';

export default function Page() {
  return (
    <NewsSectionPage
      eyebrow="Community News"
      title="People & Community"
      description="Stories centred on people, experiences, participation, leadership, and the human side of community development."
      parentLabel="Community"
      parentHref="/news/community"
      coverageAreas={["People","Community voices","Participation","Leadership"]}
    />
  );
}
