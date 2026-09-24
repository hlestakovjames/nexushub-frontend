import ProjectSectionPage from '@/components/projects/ProjectSectionPage';
import { siteImages } from '@/config/site-images';

export default function CommunityProjectsPage() {
  return (
    <ProjectSectionPage
      heroImage={siteImages.projects.community}
      eyebrow="Community Projects"
      title="Projects with people and communities at the centre."
      intro="Projects across health, education, social impact, outreach, and community development."
      parentHref="/projects"
      parentLabel="All Projects"
      areas={[
        {
          name: 'Health',
          href: '/projects/community/health',
          description: 'Community health, wellness, awareness, and healthcare-focused initiatives.',
        },
        {
          name: 'Education',
          href: '/projects/community/education',
          description: 'Education, learning, digital literacy, skills development, and academic initiatives.',
        },
        {
          name: 'Social Impact',
          href: '/projects/community/social-impact',
          description: 'Projects designed around measurable social outcomes and community wellbeing.',
        },
        {
          name: 'Outreach',
          href: '/projects/community/outreach',
          description: 'Community engagement, awareness, service, and outreach initiatives.',
        },
        {
          name: 'Community Development',
          href: '/projects/community/community-development',
          description: 'Longer-term community development projects and collaborative local initiatives.',
        },
      ]}
    />
  );
}
