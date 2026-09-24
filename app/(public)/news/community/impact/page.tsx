import NewsSectionPage from '@/components/news/NewsSectionPage';

export default function Page() {
  return (
    <NewsSectionPage
      eyebrow="Community News"
      title="Community Impact"
      description="Editorial coverage focused on outcomes, lessons, progress, and the wider impact of community-focused work."
      parentLabel="Community"
      parentHref="/news/community"
      coverageAreas={["Impact stories","Outcomes","Progress","Lessons and learning"]}
    />
  );
}
