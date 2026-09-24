import NewsSectionPage from '@/components/news/NewsSectionPage';

export default function Page() {
  return (
    <NewsSectionPage
      eyebrow="Community News"
      title="Places & Community"
      description="Coverage of communities and places, local developments, community spaces, and place-based initiatives."
      parentLabel="Community"
      parentHref="/news/community"
      coverageAreas={["Places","Local developments","Community spaces","Place-based initiatives"]}
    />
  );
}
