import { useTranslation } from 'react-i18next';
import { ButtonLink, GhostLink } from '@/components/ui/Button';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

export function GalleryCtaSection() {
  const { t } = useTranslation();

  return (
    <AnimatedSection className="section-space pt-8" animation="up">
      <div className="container-shell">
        <div className="overflow-hidden rounded-[36px] border border-black/5 bg-surface-muted px-6 py-10 dark:border-white/10 sm:px-8 lg:px-12 lg:py-14">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-700 dark:text-brand-500">
                {t('galleryPage.cta.eyebrow')}
              </p>
              <h2 className="mt-3 font-display text-4xl font-semibold text-ink-900 sm:text-5xl">
                {t('galleryPage.cta.title')}
              </h2>
              <p className="mt-4 text-base leading-8 text-ink-500">
                {t('galleryPage.cta.description')}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <ButtonLink to="/contact">{t('galleryPage.cta.primary')}</ButtonLink>
              <GhostLink to="/projects">{t('galleryPage.cta.secondary')}</GhostLink>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
