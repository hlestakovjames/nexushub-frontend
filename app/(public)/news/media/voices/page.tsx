import NewsSectionPage from '@/components/news/NewsSectionPage';

export default function Page() {
  return (
    <NewsSectionPage
      eyebrow="Media News"
      title="Voices Media News"
      description="Coverage of NHTV Voices, including podcasting, interviews, opinion programming, features, and related productions."
      parentLabel="Media"
      parentHref="/news/media"
      coverageAreas={["Podcasts","Interviews","Opinion","Voice-led productions"]}
    />
  );
}
