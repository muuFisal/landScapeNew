export type GalleryItem = {
  image: string;
  title: { en: string; ar: string };
};

export const galleryItems: GalleryItem[] = [
  {
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80',
    title: { en: 'Poolside serenity', ar: 'هدوء حول حمام السباحة' },
  },
  {
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80',
    title: { en: 'Luxury villa garden', ar: 'حديقة فيلا فاخرة' },
  },
  {
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1600&q=80',
    title: { en: 'Green courtyard', ar: 'فناء أخضر' },
  },
  {
    image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1600&q=80',
    title: { en: 'Elegant arrival landscape', ar: 'واجهة وصول أنيقة' },
  },
  {
    image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=1600&q=80',
    title: { en: 'Seasonal planting palette', ar: 'لوحة زراعية موسمية' },
  },
  {
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600&q=80',
    title: { en: 'Family outdoor lawn', ar: 'مسطح خارجي للعائلة' },
  },
];
