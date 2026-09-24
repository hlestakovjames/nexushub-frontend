import NewsSectionPage from '@/components/news/NewsSectionPage';

export default function Page() {
  return (
    <NewsSectionPage
      eyebrow="Digital News"
      title="Digital Transformation News"
      description="Coverage of digital transformation initiatives, modernisation efforts, technology adoption, and organisational change through technology."
      parentLabel="Digital"
      parentHref="/news/digital"
      coverageAreas={["Transformation programmes","Technology adoption","Modernisation","Digital change"]}
    />
  );
}
