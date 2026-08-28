export type SectionBranding = {
  id: string;
  label: string;

  primary: string;
  secondary: string;
  accent: string;

  background: string;
  foreground: string;

  description: string;
};

export const sectionBranding: SectionBranding[] = [
  {
    id: 'global',
    label: 'Nexus Hub',

    primary: '#050A30',
    secondary: '#1266B6',
    accent: '#5FC9E6',

    background: '#050A30',
    foreground: '#FFFFFF',

    description:
      'Nexus Hub — Connecting Ideas Through Digital Innovation.',
  },

  {
    id: 'media',
    label: 'Media',

    primary: '#050A30',
    secondary: '#1266B6',
    accent: '#F2AF6B',

    background: '#050A30',
    foreground: '#FFFFFF',

    description:
      'Stories, voices, football and digital media from Nexus Hub.',
  },

  {
    id: 'digital',
    label: 'Digital',

    primary: '#050A30',
    secondary: '#1266B6',
    accent: '#5FC9E6',

    background: '#050A30',
    foreground: '#FFFFFF',

    description:
      'Digital products, technology and innovation.',
  },

  {
    id: 'business',
    label: 'Business',

    primary: '#050A30',
    secondary: '#1266B6',
    accent: '#F5C04A',

    background: '#050A30',
    foreground: '#FFFFFF',

    description:
      'Business solutions, consulting and partnerships.',
  },

  {
    id: 'blog',
    label: 'Blog',

    primary: '#050A30',
    secondary: '#816FF8',
    accent: '#5FC9E6',

    background: '#FFFFFF',
    foreground: '#050A30',

    description:
      'Ideas, insights and perspectives from Nexus Hub.',
  },

  {
    id: 'news',
    label: 'News',

    primary: '#050A30',
    secondary: '#1266B6',
    accent: '#F2AF6B',

    background: '#FFFFFF',
    foreground: '#050A30',

    description:
      'The latest news and announcements from Nexus Hub.',
  },

  {
    id: 'events-activities',
    label: 'Events & Activities',

    primary: '#050A30',
    secondary: '#816FF8',
    accent: '#F5C04A',

    background: '#FFFFFF',
    foreground: '#050A30',

    description:
      'Events, activities and experiences from Nexus Hub.',
  },

  {
    id: 'resources',
    label: 'Resources',

    primary: '#050A30',
    secondary: '#1266B6',
    accent: '#5FC9E6',

    background: '#FFFFFF',
    foreground: '#050A30',

    description:
      'Useful resources, documents and guides.',
  },
];