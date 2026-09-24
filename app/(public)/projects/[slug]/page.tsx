import ProjectDetailPage from '@/components/projects/ProjectDetailPage';

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  return <ProjectDetailPage slug={slug} />;
}
