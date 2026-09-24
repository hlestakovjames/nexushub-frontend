import NewsSectionPage from '@/components/news/NewsSectionPage';

export default function Page() {
  return (
    <NewsSectionPage
      eyebrow="Digital News"
      title="Technology News"
      description="Technology-focused coverage including engineering developments, technical platforms, infrastructure, and emerging technologies."
      parentLabel="Digital"
      parentHref="/news/digital"
      coverageAreas={["Technology developments","Engineering","Infrastructure","Emerging technologies"]}
    />
  );
}
