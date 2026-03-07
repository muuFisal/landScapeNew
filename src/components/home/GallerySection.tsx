import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { galleryItems } from '@/data/gallery';

export function GallerySection({ locale }: { locale: 'en' | 'ar' }) {
  const { t } = useTranslation();

  return (
    <AnimatedSection className="section-space bg-surface-muted/70" animation="scale">
      <div className="container-shell">
        <SectionHeading eyebrow={t('home.gallery.eyebrow')} title={t('home.gallery.title')} description={t('home.gallery.description')} align="center" />
        <div className="-mx-4 overflow-x-auto px-4 pb-2 sm:-mx-6 sm:px-6 lg:mx-0 lg:overflow-visible lg:px-0">
          <div className="flex gap-4 snap-x-mandatory sm:gap-5 lg:grid lg:grid-cols-3">
            {galleryItems.map((item, index) => (
              <motion.figure
                key={`${item.title.en}-${index}`}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group snap-start-item min-w-[78%] flex-none overflow-hidden rounded-[30px] border border-black/5 bg-surface-strong p-3 shadow-soft dark:border-white/10 sm:min-w-[44%] lg:min-w-0"
              >
                <div className="overflow-hidden rounded-[22px]">
                  <img
                    src={item.image}
                    alt={item.title[locale]}
                    loading="lazy"
                    className="h-72 w-full object-cover transition duration-700 group-hover:scale-110 group-hover:rotate-[0.5deg]"
                  />
                </div>
                <figcaption className="px-2 pb-2 pt-4 text-center">
                  <h3 className="font-display text-2xl font-semibold text-ink-900">{item.title[locale]}</h3>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
