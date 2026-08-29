export type NavigationItem = {
  label: string;
  href: string;
  children?: NavigationItem[];
};

export type SectionNavigation = {
  id: string;
  label: string;
  href: string;

  /**
   * Global navigation items that remain visible
   * while the visitor is inside this section.
   */
  globalItems: string[];

  /**
   * Navigation belonging specifically to this section.
   */
  items: NavigationItem[];

  /**
   * Optional navigation belonging to a subdivision.
   */
  subdivisions?: Record<string, NavigationItem[]>;
};

/*
|--------------------------------------------------------------------------
| GLOBAL NAVIGATION
|--------------------------------------------------------------------------
*/

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

/*
|--------------------------------------------------------------------------
| SECTION NAVIGATION
|--------------------------------------------------------------------------
*/

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
      'Contact',
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

    subdivisions: {
      'nexus-hub-tv': [
        {
          label: 'Home',
          href: '/media/nexus-hub-tv',
        },
        {
          label: 'Shows',
          href: '/media/nexus-hub-tv/shows',
        },
        {
          label: 'Schedule',
          href: '/media/nexus-hub-tv/schedule',
        },
        {
          label: 'Stories',
          href: '/media/nexus-hub-tv/stories',
        },
      ],

      'nhtv-football': [
        {
          label: 'Home',
          href: '/media/nhtv-football',
        },
        {
          label: 'Football News',
          href: '/media/nhtv-football/news',
        },
        {
          label: 'Matches',
          href: '/media/nhtv-football/matches',
        },
        {
          label: 'Features',
          href: '/media/nhtv-football/features',
        },
      ],

      'nhtv-stories': [
        {
          label: 'Home',
          href: '/media/nhtv-stories',
        },
        {
          label: 'Stories',
          href: '/media/nhtv-stories/stories',
        },
        {
          label: 'Features',
          href: '/media/nhtv-stories/features',
        },
      ],

      'nhtv-voices': [
        {
          label: 'Home',
          href: '/media/nhtv-voices',
        },
        {
          label: 'Interviews',
          href: '/media/nhtv-voices/interviews',
        },
        {
          label: 'Opinions',
          href: '/media/nhtv-voices/opinions',
        },
        {
          label: 'Features',
          href: '/media/nhtv-voices/features',
        },
      ],
    },
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
      'Resources',
      'Contact',
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
      {
        label: 'Projects',
        href: '/projects',
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
          label: 'UI/UX & Product Design',
          href: '/digital/services/ui-ux-design',
        },
        {
          label: 'Digital Platforms',
          href: '/digital/services/digital-platforms',
        },
        {
          label: 'Digital Transformation',
          href: '/digital/services/digital-transformation',
        },
        {
          label: 'E-commerce',
          href: '/digital/services/ecommerce',
        },
        {
          label: 'Systems Integration',
          href: '/digital/services/systems-integration',
        },
        {
          label: 'Technical Consulting',
          href: '/digital/services/technical-consulting',
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
      'Resources',
      'Contact',
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
          label: 'Digital Solutions',
          href: '/business/solutions/digital',
        },
        {
          label: 'Media Solutions',
          href: '/business/solutions/media',
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
      'Contact',
    ],

    items: [
      {
        label: 'All Posts',
        href: '/blog',
      },
      {
        label: 'Technology',
        href: '/blog/technology',
      },
      {
        label: 'Digital Innovation',
        href: '/blog/digital-innovation',
      },
      {
        label: 'Business',
        href: '/blog/business',
      },
      {
        label: 'Media',
        href: '/blog/media',
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
      'Contact',
    ],

    items: [
      {
        label: 'Latest News',
        href: '/news',
      },
      {
        label: 'Company News',
        href: '/news/company',
      },
      {
        label: 'Media News',
        href: '/news/media',
      },
      {
        label: 'Digital News',
        href: '/news/digital',
      },
      {
        label: 'Business News',
        href: '/news/business',
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
      'Contact',
    ],

    items: [
      {
        label: 'Upcoming Events',
        href: '/events-activities/events',
      },
      {
        label: 'Activities',
        href: '/events-activities/activities',
      },
      {
        label: 'Past Events',
        href: '/events-activities/past',
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
      'Resources',
      'Contact',
    ],

    items: [
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
];