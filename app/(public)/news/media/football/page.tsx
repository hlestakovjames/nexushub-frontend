import NewsSectionPage from '@/components/news/NewsSectionPage';

export default function Page() {
  return (
    <NewsSectionPage
      eyebrow="Media News"
      title="Football Media News"
      description="Coverage of NHTV Football developments, coverage plans, productions, competitions, teams, and football media activity."
      parentLabel="Media"
      parentHref="/news/media"
      coverageAreas={["Football coverage","Competitions","Teams","Football productions"]}
    />
  );
}
