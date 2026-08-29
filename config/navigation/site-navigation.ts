export type NavigationItem = {
  label: string;
  href: string;
};

export type SectionNavigation = {
  id: string;
  label: string;
  href: string;
  globalItems: string[];
  items: NavigationItem[];
  subdivisions?: {
    [key: string]: NavigationItem[];
  };
};

export const globalNavigation: NavigationItem[] = [
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Media',
    href: '/media',
  },
  {
    label: 'Digital',
    href: '/digital',
  },
  {
    label: 'Business',
    href: '/business',
  },
  {
    label: 'Blog',
    href: '/blog',
  },
  {
    label: 'News',
    href: '/news',
  },
  {
    label: 'Events & Activities',
    href: '/events-activities',
  },
  {
    label: 'Resources',
    href: '/resources',
  },
];

export const sectionNavigation: SectionNavigation[] = [
  /*
  |--------------------------------------------------------------------------
  | ABOUT
  |--------------------------------------------------------------------------
  */

  {
    id: 'about',
    label: 'About',
    href: '/about',

    globalItems: [
      'About',
      'Media',
      'Digital',
      'Business',
      'Blog',
      'News',
      'Events & Activities',
      'Resources',
    ],

    items: [
      {
        label: 'Overview',
        href: '/about',
      },
      {
        label: 'Our Story',
        href: '/about/our-story',
      },
      {
        label: 'Mission & Vision',
        href: '/about/mission-vision',
      },
      {
        label: 'Our Approach',
        href: '/about/approach',
      },
    ],
  },

  /*
  |--------------------------------------------------------------------------
  | MEDIA
  |--------------------------------------------------------------------------
  */

  {
    id: 'media',
    label: 'Media',
    href: '/media',

    globalItems: [
      'About',
      'Media',
      'Digital',
      'Business',
      'Blog',
      'News',
      'Events & Activities',
      'Resources',
    ],

    items: [
      {
        label: 'Nexus Hub TV',
        href: '/media/nexus-hub-tv',
      },
      {
        label: 'NHTV Football',
        href: '/media/nhtv-football',
      },
      {
        label: 'NHTV Stories',
        href: '/media/nhtv-stories',
      },
      {
        label: 'NHTV Voices',
        href: '/media/nhtv-voices',
      },
    ],
  },

  /*
  |--------------------------------------------------------------------------
  | DIGITAL
  |--------------------------------------------------------------------------
  */

  {
    id: 'digital',
    label: 'Digital',
    href: '/digital',

    globalItems: [
      'About',
      'Media',
      'Digital',
      'Business',
      'Blog',
      'News',
      'Events & Activities',
      'Resources',
    ],

    items: [
      {
        label: 'Overview',
        href: '/digital',
      },
      {
        label: 'Services',
        href: '/digital/services',
      },
    ],

    subdivisions: {
      services: [
        {
          label: 'All Services',
          href: '/digital/services',
        },
        {
          label: 'Web Development',
          href: '/digital/services/web-development',
        },
        {
          label: 'Software Development',
          href: '/digital/services/software-development',
        },
        {
          label: 'Mobile App Development',
          href: '/digital/services/mobile-app-development',
        },
        {
          label: 'E-commerce',
          href: '/digital/services/ecommerce',
        },
        {
          label: 'Digital Platforms',
          href: '/digital/services/digital-platforms',
        },
        {
          label: 'Systems Integration',
          href: '/digital/services/systems-integration',
        },
        {
          label: 'Digital Transformation',
          href: '/digital/services/digital-transformation',
        },
        {
          label: 'Technical Consulting',
          href: '/digital/services/technical-consulting',
        },
        {
          label: 'UI/UX Design',
          href: '/digital/services/ui-ux-design',
        },
      ],
    },
  },

  /*
  |--------------------------------------------------------------------------
  | BUSINESS
  |--------------------------------------------------------------------------
  */

  {
    id: 'business',
    label: 'Business',
    href: '/business',

    globalItems: [
      'About',
      'Media',
      'Digital',
      'Business',
      'Blog',
      'News',
      'Events & Activities',
      'Resources',
    ],

    items: [
      {
        label: 'Overview',
        href: '/business',
      },
      {
        label: 'Services',
        href: '/business/services',
      },
      {
        label: 'Solutions',
        href: '/business/solutions',
      },
      {
        label: 'Partnerships',
        href: '/business/partnerships',
      },
    ],

    subdivisions: {
      services: [
        {
          label: 'All Services',
          href: '/business/services',
        },
        {
          label: 'Business Consulting',
          href: '/business/services/business-consulting',
        },
        {
          label: 'Strategy & Advisory',
          href: '/business/services/strategy-advisory',
        },
        {
          label: 'Digital Business Services',
          href: '/business/services/digital-business',
        },
        {
          label: 'Brand & Creative Services',
          href: '/business/services/brand-creative',
        },
      ],

      solutions: [
        {
          label: 'All Solutions',
          href: '/business/solutions',
        },
        {
          label: 'Business Solutions',
          href: '/business/solutions/business',
        },
        {
          label: 'Organizational Solutions',
          href: '/business/solutions/organizational',
        },
        {
          label: 'Digital Solutions',
          href: '/business/solutions/digital',
        },
        {
          label: 'Media & Marketing Solutions',
          href: '/business/solutions/media',
        },
        {
          label: 'Partnership Solutions',
          href: '/business/solutions/partnerships',
        },
        {
          label: 'Custom Solutions',
          href: '/business/solutions/custom',
        },
      ],
    },
  },

  /*
  |--------------------------------------------------------------------------
  | BLOG
  |--------------------------------------------------------------------------
  */

  {
    id: 'blog',
    label: 'Blog',
    href: '/blog',

    globalItems: [
      'About',
      'Media',
      'Digital',
      'Business',
      'Blog',
      'News',
      'Events & Activities',
      'Resources',
    ],

    items: [
      {
        label: 'All Posts',
        href: '/blog',
      },
    ],
  },

  /*
  |--------------------------------------------------------------------------
  | NEWS
  |--------------------------------------------------------------------------
  */

  {
    id: 'news',
    label: 'News',
    href: '/news',

    globalItems: [
      'About',
      'Media',
      'Digital',
      'Business',
      'Blog',
      'News',
      'Events & Activities',
      'Resources',
    ],

    items: [
      {
        label: 'All News',
        href: '/news',
      },
    ],
  },

  /*
  |--------------------------------------------------------------------------
  | EVENTS & ACTIVITIES
  |--------------------------------------------------------------------------
  */

  {
    id: 'events-activities',
    label: 'Events & Activities',
    href: '/events-activities',

    globalItems: [
      'About',
      'Media',
      'Digital',
      'Business',
      'Blog',
      'News',
      'Events & Activities',
      'Resources',
    ],

    items: [
      {
        label: 'All Events & Activities',
        href: '/events-activities',
      },
    ],
  },

  /*
  |--------------------------------------------------------------------------
  | RESOURCES
  |--------------------------------------------------------------------------
  */

  {
    id: 'resources',
    label: 'Resources',
    href: '/resources',

    globalItems: [
      'About',
      'Media',
      'Digital',
      'Business',
      'Blog',
      'News',
      'Events & Activities',
      'Resources',
    ],

    items: [
      {
        label: 'Overview',
        href: '/resources',
      },
      {
        label: 'Downloads',
        href: '/resources/downloads',
      },
      {
        label: 'Guides',
        href: '/resources/guides',
      },
      {
        label: 'Documents',
        href: '/resources/documents',
      },
    ],
  },

  /*
  |--------------------------------------------------------------------------
  | CONTACT
  |--------------------------------------------------------------------------
  |
  | Contact is intentionally NOT included in globalItems.
  | It is a global header action and remains available through
  | Quick Links and the footer.
  |--------------------------------------------------------------------------
  */
];