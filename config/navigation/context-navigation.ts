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

/**
 * Only publish destinations with meaningful, implemented page content.
 * Expand this list as the remaining corporate pages are completed.
 */
export const corporateNavigation: ContextNavigationItem[] = [
  { label: 'About', href: '/about' },
  { label: 'Focus', href: '/areas-of-focus' },
  { label: 'Services', href: '/services' },
  { label: 'Products', href: '/products' },
  { label: 'Insights', href: '/publications' },
  { label: 'Resources', href: '/resources' },
  { label: 'Events', href: '/events' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
];

export const navigationContexts: NavigationContext[] = [
  {
    id: 'corporate',
    label: 'Nexus Hub',
    routePrefix: '/',
    items: corporateNavigation,
  },
];

export function resolveNavigationContext(
  pathname: string,
): NavigationContext {
  // The current navigation has one global context; retain the parameter for callers.
  void pathname;

  return {
    id: 'corporate',
    label: 'Nexus Hub',
    routePrefix: '/',
    items: corporateNavigation,
  };
}
