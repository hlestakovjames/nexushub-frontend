import ProjectDetailPage from '@/components/projects/ProjectDetailPage';

export default async function ProjectCategorySlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return <ProjectDetailPage slug={slug} />;
}
