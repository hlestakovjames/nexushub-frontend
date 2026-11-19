export type ProjectRecord = {
  slug: string;
  title: string;
  category: 'Digital' | 'Business' | 'Media' | 'Community';
  area: string;
  status: string;
  summary: string;
  client: string;
  image: string;
  overview: string;
  challenge: string;
  objectives: string[];
  solution: string;
  capabilities: string[];
  technology: string[];
  outcomes: string[];
  nexusHubRole: string;
  relatedLinks: {
    label: string;
    href: string;
  }[];
};

export const projectRecords: ProjectRecord[] = [
  {
    slug: 'kuhrsa-management-system',
    title: 'KUHRSA Management System',
    category: 'Digital',
    area: 'Web & Software',
    status: 'Live · Ongoing Development',
    client: 'Kisii University Human Resource Students’ Association',
    image: '/images/projects/kisiihrsa.jpeg',
    summary:
      'An integrated management platform designed for KUHRSA, connecting membership, administration, finance, governance, events, activities, communication, and member-facing services.',
    overview:
      'The KUHRSA Management System is an integrated organisational management platform being developed for the Kisii University Human Resource Students’ Association. The project brings together member-facing services and management capabilities within a connected digital system while maintaining clear role-based access across the organisation.',
    challenge:
      'KUHRSA requires more than a simple public website. Its operations span membership, finance, administration, governance, communication, activities, events, elections, and member services, creating a need for an integrated system with appropriate roles, permissions, workflows, and organisational controls.',
    objectives: [
      'Create a central digital platform for KUHRSA operations.',
      'Provide structured membership management and member-facing services.',
      'Support finance and administration workflows.',
      'Establish role-based governance and executive management capabilities.',
      'Support events, activities, elections, communication, and organisational content.',
      'Provide a scalable architecture for future integrations and operational modules.',
    ],
    solution:
      'Nexus Hub is developing KUHRSA as an integrated management, membership, finance, and administration platform rather than as a standalone website. The system architecture separates public information, member services, executive functions, administrative capabilities, and higher-level system administration while allowing them to operate within one connected platform.',
    capabilities: [
      'Public KUHRSA information and communication',
      'Member registration and membership management',
      'Membership status and renewal workflows',
      'Membership fee and payment management',
      'Finance and reconciliation workflows',
      'Administration management',
      'Executive governance and role management',
      'Role-based access control',
      'Events management',
      'Activities management',
      'Attendance and participation workflows',
      'Elections management',
      'News, blog, gallery, and resources',
      'Notifications and communication',
      'Audit and administrative controls',
      'Member and executive dashboards',
    ],
    technology: [
      'Next.js',
      'React',
      'TypeScript',
      'NestJS',
      'Prisma',
      'PostgreSQL',
      'REST API architecture',
      'Role-based access control',
      'Responsive web architecture',
    ],
    outcomes: [
      'A defined architecture for an integrated KUHRSA management platform.',
      'A public-facing frontend and management-oriented digital experience.',
      'Structured foundations for membership, administration, finance, and governance workflows.',
      'A scalable system structure for continued backend and module development.',
    ],
    nexusHubRole:
      'Nexus Hub serves as the technology development partner responsible for the design, architecture, frontend development, backend development, and continued evolution of the KUHRSA digital management platform.',
    relatedLinks: [
      {
        label: 'Visit KUHRSA',
        href: 'https://kuhrsa.vercel.app',
      },
      {
        label: 'Start a Digital Project',
        href: '/contact?channel=project',
      },
    ],
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
