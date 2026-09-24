import ProjectSectionPage from '@/components/projects/ProjectSectionPage';
import { siteImages } from '@/config/site-images';
import { projectRecords } from '@/components/projects/project-data';

export default function DigitalProjectsPage() {
  return (
    <ProjectSectionPage
      heroImage={siteImages.projects.digital}
      eyebrow="Digital Projects"
      title="Technology built around real needs."
      intro="Digital projects across websites, software systems, mobile applications, AI, ICT solutions, and broader digital transformation."
      parentHref="/projects"
      parentLabel="All Projects"
      areas={[
        {
          name: 'Web & Software',
          href: '/projects/digital/web-software',
          description: 'Websites, platforms, enterprise systems, portals, and custom software solutions.',
        },
        {
          name: 'Mobile',
          href: '/projects/digital/mobile',
          description: 'Mobile applications and mobile-first digital experiences.',
        },
        {
          name: 'AI & Automation',
          href: '/projects/digital/ai-automation',
          description: 'AI-enabled products, workflow automation, intelligent services, and connected processes.',
        },
        {
          name: 'ICT Solutions',
          href: '/projects/digital/ict-solutions',
          description: 'ICT infrastructure, integrations, technical systems, and practical technology solutions.',
        },
        {
          name: 'Digital Transformation',
          href: '/projects/digital/digital-transformation',
          description: 'Projects that help organizations modernize processes, services, operations, and customer experiences.',
        },
      ]}
      records={projectRecords.filter((project) => project.category === 'Digital')}
    />
  );
}
