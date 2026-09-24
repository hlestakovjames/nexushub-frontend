import NewsSectionPage from '@/components/news/NewsSectionPage';

export default function Page() {
  return (
    <NewsSectionPage
      eyebrow="Media News"
      title="Stories Media News"
      description="Coverage of NHTV Stories productions, editorial developments, featured storytelling, and story-led media initiatives."
      parentLabel="Media"
      parentHref="/news/media"
      coverageAreas={["Stories productions","Editorial developments","Storytelling","Featured work"]}
    />
  );
}
