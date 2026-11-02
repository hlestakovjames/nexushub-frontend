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
  { label: 'Areas of Focus', href: '/areas-of-focus' },
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
  return {
    id: 'corporate',
    label: 'Nexus Hub',
    routePrefix: '/',
    items: corporateNavigation,
  };
}
