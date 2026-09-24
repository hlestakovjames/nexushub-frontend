import ProjectSectionPage from '@/components/projects/ProjectSectionPage';
import { siteImages } from '@/config/site-images';

export default function BusinessProjectsPage() {
  return (
    <ProjectSectionPage
      heroImage={siteImages.projects.business}
      eyebrow="Business Projects"
      title="Projects that create organizational possibility."
      intro="Business-focused projects covering consulting, partnerships, corporate initiatives, business development, and growth."
      parentHref="/projects"
      parentLabel="All Projects"
      areas={[
        {
          name: 'Consulting',
          href: '/projects/business/consulting',
          description: 'Projects shaped around organizational challenges, strategy, planning, and advisory support.',
        },
        {
          name: 'Partnerships',
          href: '/projects/business/partnerships',
          description: 'Collaborative projects connecting organizations, resources, capabilities, and opportunities.',
        },
        {
          name: 'Corporate',
          href: '/projects/business/corporate',
          description: 'Corporate initiatives, organizational projects, and structured business engagements.',
        },
        {
          name: 'Business Development',
          href: '/projects/business/business-development',
          description: 'Projects focused on opportunities, markets, services, customers, and commercial development.',
        },
        {
          name: 'Growth',
          href: '/projects/business/growth',
          description: 'Projects supporting sustainable organizational growth and long-term value creation.',
        },
      ]}
    />
  );
}
