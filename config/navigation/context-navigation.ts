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

export const corporateNavigation: ContextNavigationItem[] = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Products', href: '/products' },
  { label: 'Projects', href: '/projects' },
  { label: 'Publications', href: '/publications' },
  { label: 'Events', href: '/events' },
  { label: 'Opportunities', href: '/opportunities' },
  { label: 'Ecosystem', href: '/ecosystem' },
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
