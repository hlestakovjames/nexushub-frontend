export type ContextNavigationItem = {
  label: string;
  href: string;
};

export type NavigationContext = {
  id: string;
  label: string;
  routePrefix: string;
  items: ContextNavigationItem[];
};

/*
|--------------------------------------------------------------------------
| Nexus Hub Context Navigation
|--------------------------------------------------------------------------
|
| Navigation is resolved by the deepest matching routePrefix.
|
| Example:
|
| /media
|   -> media context
|
| /media/nhtv-football
|   -> nhtv-football context
|
| /media/nhtv-football/teams
|   -> inherits nhtv-football context
|
| /media/nhtv-football/teams/men
|   -> can later receive its own context by adding a more specific
|      routePrefix.
|
|--------------------------------------------------------------------------
*/

export const navigationContexts: NavigationContext[] = [
  {
    id: 'global',
    label: 'Nexus Hub',
    routePrefix: '/',
    items: [
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
      {
        label: 'Platforms',
        href: '/platforms',
      },
    ],
  },

  /*
  |--------------------------------------------------------------------------
  | ABOUT
  |--------------------------------------------------------------------------
  */

  {
    id: 'about',
    label: 'About',
    routePrefix: '/about',
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
      {
        label: 'Our Team',
        href: '/about/team',
      },
      {
        label: 'Leadership',
        href: '/about/leadership',
      },
      {
        label: 'Careers',
        href: '/about/careers',
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
    routePrefix: '/media',
    items: [
      {
        label: 'NEXUS HUB TV',
        href: '/media/nexus-hub-tv',
      },
      {
        label: 'NHTV FOOTBALL',
        href: '/media/nhtv-football',
      },
      {
        label: 'NHTV STORIES',
        href: '/media/nhtv-stories',
      },
      {
        label: 'NHTV VOICES',
        href: '/media/nhtv-voices',
      },
    ],
  },

  {
    id: 'nexus-hub-tv',
    label: 'NHTV',
    routePrefix: '/media/nexus-hub-tv',
    items: [
      {
        label: 'HOME',
        href: '/media/nexus-hub-tv',
      },
      {
        label: 'SHOWS',
        href: '/media/nexus-hub-tv/shows',
      },
      {
        label: 'PROGRAMS',
        href: '/media/nexus-hub-tv/programs',
      },
      {
        label: 'LIVE',
        href: '/media/nexus-hub-tv/live',
      },
      {
        label: 'VIDEOS',
        href: '/media/nexus-hub-tv/videos',
      },
      {
        label: 'NEWS',
        href: '/media/nexus-hub-tv/news',
      },
      {
        label: 'ABOUT',
        href: '/media/nexus-hub-tv/about',
      },
    ],
  },

  {
    id: 'nhtv-football',
    label: 'Football',
    routePrefix: '/media/nhtv-football',
    items: [
      {
        label: 'HOME',
        href: '/media/nhtv-football',
      },
      {
        label: 'NEWS',
        href: '/media/nhtv-football/news',
      },
      {
        label: 'FIXTURES',
        href: '/media/nhtv-football/fixtures',
      },
      {
        label: 'RESULTS',
        href: '/media/nhtv-football/results',
      },
      {
        label: 'TEAMS',
        href: '/media/nhtv-football/teams',
      },
      {
        label: 'VIDEOS',
        href: '/media/nhtv-football/videos',
      },
      {
        label: 'ABOUT',
        href: '/media/nhtv-football/about',
      },
    ],
  },

  {
    id: 'nhtv-stories',
    label: 'Stories',
    routePrefix: '/media/nhtv-stories',
    items: [
      {
        label: 'HOME',
        href: '/media/nhtv-stories',
      },
      {
        label: 'FEATURED',
        href: '/media/nhtv-stories/featured',
      },
      {
        label: 'PEOPLE',
        href: '/media/nhtv-stories/people',
      },
      {
        label: 'CULTURE',
        href: '/media/nhtv-stories/culture',
      },
      {
        label: 'COMMUNITY',
        href: '/media/nhtv-stories/community',
      },
      {
        label: 'VIDEO',
        href: '/media/nhtv-stories/video',
      },
      {
        label: 'ABOUT',
        href: '/media/nhtv-stories/about',
      },
    ],
  },

  {
    id: 'nhtv-voices',
    label: 'Voices',
    routePrefix: '/media/nhtv-voices',
    items: [
      {
        label: 'HOME',
        href: '/media/nhtv-voices',
      },
      {
        label: 'PODCASTS',
        href: '/media/nhtv-voices/podcasts',
      },
      {
        label: 'INTERVIEWS',
        href: '/media/nhtv-voices/interviews',
      },
      {
        label: 'OPINION',
        href: '/media/nhtv-voices/opinion',
      },
      {
        label: 'FEATURES',
        href: '/media/nhtv-voices/features',
      },
      {
        label: 'VIDEO',
        href: '/media/nhtv-voices/video',
      },
      {
        label: 'ABOUT',
        href: '/media/nhtv-voices/about',
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
    routePrefix: '/digital',
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
  },

  {
    id: 'digital-services',
    label: 'Digital Services',
    routePrefix: '/digital/services',
    items: [
      {
        label: 'ALL SERVICES',
        href: '/digital/services',
      },
      {
        label: 'WEB DEVELOPMENT',
        href: '/digital/services/web-development',
      },
      {
        label: 'SOFTWARE DEVELOPMENT',
        href: '/digital/services/software-development',
      },
      {
        label: 'MOBILE APP DEVELOPMENT',
        href: '/digital/services/mobile-app-development',
      },
      {
        label: 'E-COMMERCE',
        href: '/digital/services/ecommerce',
      },
      {
        label: 'DIGITAL PLATFORMS',
        href: '/digital/services/digital-platforms',
      },
      {
        label: 'SYSTEMS INTEGRATION',
        href: '/digital/services/systems-integration',
      },
      {
        label: 'DIGITAL TRANSFORMATION',
        href: '/digital/services/digital-transformation',
      },
      {
        label: 'TECHNICAL CONSULTING',
        href: '/digital/services/technical-consulting',
      },
      {
        label: 'UI/UX DESIGN',
        href: '/digital/services/ui-ux-design',
      },
    ],
  },

  /*
  |--------------------------------------------------------------------------
  | BUSINESS
  |--------------------------------------------------------------------------
  */

  {
    id: 'business',
    label: 'Business',
    routePrefix: '/business',
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
  },

  {
    id: 'business-services',
    label: 'Business Services',
    routePrefix: '/business/services',
    items: [
      {
        label: 'ALL SERVICES',
        href: '/business/services',
      },
      {
        label: 'BUSINESS CONSULTING',
        href: '/business/services/business-consulting',
      },
      {
        label: 'STRATEGY & ADVISORY',
        href: '/business/services/strategy-advisory',
      },
      {
        label: 'DIGITAL BUSINESS',
        href: '/business/services/digital-business',
      },
      {
        label: 'BRAND & CREATIVE',
        href: '/business/services/brand-creative',
      },
    ],
  },

  {
    id: 'business-solutions',
    label: 'Business Solutions',
    routePrefix: '/business/solutions',
    items: [
      {
        label: 'ALL SOLUTIONS',
        href: '/business/solutions',
      },
      {
        label: 'BUSINESS',
        href: '/business/solutions/business',
      },
      {
        label: 'ORGANIZATIONAL',
        href: '/business/solutions/organizational',
      },
      {
        label: 'DIGITAL',
        href: '/business/solutions/digital',
      },
      {
        label: 'MEDIA',
        href: '/business/solutions/media',
      },
      {
        label: 'PARTNERSHIPS',
        href: '/business/solutions/partnerships',
      },
      {
        label: 'CUSTOM',
        href: '/business/solutions/custom',
      },
    ],
  },

  /*
  |--------------------------------------------------------------------------
  | BLOG
  |--------------------------------------------------------------------------
  */

  {
    id: 'blog',
    label: 'Blog',
    routePrefix: '/blog',
    items: [
      {
        label: 'ALL POSTS',
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
    routePrefix: '/news',
    items: [
      {
        label: 'ALL NEWS',
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
    routePrefix: '/events-activities',
    items: [
      {
        label: 'ALL EVENTS & ACTIVITIES',
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
    routePrefix: '/resources',
    items: [
      {
        label: 'OVERVIEW',
        href: '/resources',
      },
      {
        label: 'DOWNLOADS',
        href: '/resources/downloads',
      },
      {
        label: 'GUIDES',
        href: '/resources/guides',
      },
      {
        label: 'DOCUMENTS',
        href: '/resources/documents',
      },
    ],
  },

  /*
  |--------------------------------------------------------------------------
  | PROJECTS
  |--------------------------------------------------------------------------
  */

  {
    id: 'projects',
    label: 'Projects',
    routePrefix: '/projects',
    items: [
      {
        label: 'PROJECTS',
        href: '/projects',
      },
    ],
  },

  /*
  |--------------------------------------------------------------------------
  | PLATFORMS
  |--------------------------------------------------------------------------
  */

  {
    id: 'platforms',
    label: 'Platforms',
    routePrefix: '/platforms',
    items: [
      {
        label: 'OVERVIEW',
        href: '/platforms',
      },
      {
        label: 'NEXUS HUB TV',
        href: '/media/nexus-hub-tv',
      },
      {
        label: 'NHTV FOOTBALL',
        href: '/media/nhtv-football',
      },
      {
        label: 'NHTV STORIES',
        href: '/media/nhtv-stories',
      },
      {
        label: 'NHTV VOICES',
        href: '/media/nhtv-voices',
      },
    ],
  },
];

export function resolveNavigationContext(
  pathname: string,
): NavigationContext {
  const matches = navigationContexts.filter((context) => {
    if (context.routePrefix === '/') {
      return true;
    }

    return (
      pathname === context.routePrefix ||
      pathname.startsWith(`${context.routePrefix}/`)
    );
  });

  return matches.sort(
    (a, b) =>
      b.routePrefix.length - a.routePrefix.length,
  )[0];
}
