import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { galleryItems } from '@/data/gallery';

export function GalleryGridSection({ locale }: { locale: 'en' | 'ar' }) {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const activeItem = useMemo(() => {
    if (activeIndex === null) return null;
    return galleryItems[activeIndex] ?? null;
  }, [activeIndex]);

  return (
    <>
      <AnimatedSection className="section-space pt-4" animation="center">
        <div className="container-shell">
          <SectionHeading
            eyebrow={t('galleryPage.grid.eyebrow')}
            title={t('galleryPage.grid.title')}
            description={t('galleryPage.grid.description')}
            align="center"
          />

          <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>figure:not(:first-child)]:mt-5">
            {galleryItems.map((item, index) => {
              const patterns = [
                { y: 60, x: 0, scale: 0.96 },
                { y: 0, x: 50, scale: 0.94 },
                { y: 0, x: -50, scale: 0.94 },
                { y: -50, x: 0, scale: 0.96 },
                { y: 0, x: 0, scale: 0.88 },
              ];
              const start = patterns[index % patterns.length];
              const tall = index % 3 === 0 || index % 5 === 0;

              return (
                <motion.figure
                  key={`${item.title.en}-${index}`}
                  initial={{ opacity: 0, ...start, filter: 'blur(12px)' }}
                  whileInView={{ opacity: 1, y: 0, x: 0, scale: 1, filter: 'blur(0px)' }}
                  viewport={{ once: true, amount: 0.18 }}
                  transition={{ duration: 0.8, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative mb-5 break-inside-avoid overflow-hidden rounded-[28px] border border-black/5 bg-surface-strong p-3 shadow-soft dark:border-white/10"
                >
                  <button type="button" className="relative block w-full overflow-hidden rounded-[22px] text-start" onClick={() => setActiveIndex(index)}>
                    <img
                      src={item.image}
                      alt={item.title[locale]}
                      loading="lazy"
                      className={`w-full object-cover transition duration-700 group-hover:scale-110 ${tall ? 'h-[32rem]' : 'h-[24rem]'}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent opacity-90" />
                  </button>
                  <figcaption className="absolute inset-x-0 bottom-0 z-10 px-7 pb-7 pt-16">
                    <h3 className="font-display text-3xl font-semibold text-white sm:text-[2rem]">{item.title[locale]}</h3>
                  </figcaption>
                </motion.figure>
              );
            })}
          </div>
        </div>
      </AnimatedSection>

      {activeItem ? (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/80 px-4 py-8 backdrop-blur-sm" role="dialog" aria-modal="true" onClick={() => setActiveIndex(null)}>
          <div className="relative w-full max-w-5xl" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              onClick={() => setActiveIndex(null)}
              className="absolute end-3 top-3 z-10 rounded-full bg-white/90 p-2 text-ink-900 shadow-soft transition hover:scale-105"
              aria-label="Close gallery image"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="overflow-hidden rounded-[28px] border border-white/10 bg-black/40 shadow-card">
              <img src={activeItem.image} alt={activeItem.title[locale]} className="max-h-[78vh] w-full object-cover" />
              <div className="border-t border-white/10 bg-black/40 px-6 py-5 text-white">
                <h3 className="font-display text-3xl font-semibold">{activeItem.title[locale]}</h3>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
