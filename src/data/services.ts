export type ServiceSlug = 'design' | 'build' | 'landscape' | 'pool';

export type ServiceItem = {
  slug: ServiceSlug;
  image: string;
  imagePositionClassName?: string;
};

export const services: ServiceItem[] = [
  {
    slug: 'design',
    image: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1400&q=80',
    imagePositionClassName: 'object-[center_58%]',
  },
  {
    slug: 'build',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=80',
    imagePositionClassName: 'object-center',
  },
  {
    slug: 'landscape',
    image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=80',
    imagePositionClassName: 'object-[center_52%]',
  },
  {
    slug: 'pool',
    image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1400&q=80',
    imagePositionClassName: 'object-[center_60%]',
  },
];

const serviceSlugSet = new Set<ServiceSlug>(services.map((service) => service.slug));

export type ProjectServiceFilter = 'all' | ServiceSlug;

export function isServiceSlug(value: string | null | undefined): value is ServiceSlug {
  return value != null && serviceSlugSet.has(value as ServiceSlug);
}

export function getProjectsPath(service?: ServiceSlug) {
  return service ? `/projects?service=${service}` : '/projects';
}
