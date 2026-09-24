export type ProjectRecord = {
  slug: string;
  title: string;
  category: 'Digital' | 'Business' | 'Media' | 'Community';
  area: string;
  status: string;
  summary: string;
};

export const projectRecords: ProjectRecord[] = [
  {
    slug: 'mercycare-health-platform',
    title: 'MercyCare Health Platform',
    category: 'Digital',
    area: 'Web & Software',
    status: 'Featured Project',
    summary:
      'A digital platform project developed to support MercyCare and its digital presence, services, communication, and wider ecosystem.',
  },
  {
    slug: 'kuhrsa-management-system',
    title: 'KUHRSA Management System',
    category: 'Digital',
    area: 'Web & Software',
    status: 'Featured Project',
    summary:
      'A management system project for Kisii University Human Resources Students’ Association, bringing organizational operations and member-facing services into a connected digital platform.',
  },
];

export const projectCategories = [
  {
    name: 'Digital',
    href: '/projects/digital',
    description:
      'Technology projects covering software, websites, mobile applications, AI, ICT solutions, and digital transformation.',
  },
  {
    name: 'Business',
    href: '/projects/business',
    description:
      'Projects focused on consulting, partnerships, organizational development, business growth, and corporate initiatives.',
  },
  {
    name: 'Media',
    href: '/projects/media',
    description:
      'Projects across Nexus Hub TV, football, stories, voices, and media productions.',
  },
  {
    name: 'Community',
    href: '/projects/community',
    description:
      'Projects focused on health, education, social impact, outreach, and community development.',
  },
];

export function getProjectBySlug(slug: string) {
  return projectRecords.find((project) => project.slug === slug);
}
