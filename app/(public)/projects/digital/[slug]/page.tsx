import ProjectDetailPage from '@/components/projects/ProjectDetailPage';

export default async function DigitalProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <ProjectDetailPage
      slug={slug}
      categoryHref="/projects/digital"
      categoryLabel="Digital"
    />
  );
}
