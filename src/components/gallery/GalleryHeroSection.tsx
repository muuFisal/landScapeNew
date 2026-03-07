import { ImageIcon, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

export function GalleryHeroSection() {
  const { t } = useTranslation();

  return (
    <AnimatedSection className="section-space pb-10" animation="down">
      <div className="container-shell">
        <div className="relative overflow-hidden rounded-[36px] border border-black/5 bg-surface-strong px-6 py-10 shadow-soft dark:border-white/10 sm:px-8 lg:px-12 lg:py-16">
          <div className="absolute inset-0 opacity-20">
            <img
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1800&q=80"
              alt="Landscape gallery"
              className="h-full w-full object-cover blur-[2px]"
            />
          </div>
          <div className="hero-overlay absolute inset-0" />
          <div className="relative z-10 max-w-3xl text-white">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] backdrop-blur-md">
              <ImageIcon className="h-4 w-4" />
              {t('galleryPage.eyebrow')}
            </div>
            <h1 className="font-display text-5xl font-semibold leading-[0.95] text-balance sm:text-6xl lg:text-7xl">
              {t('galleryPage.title')}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
              {t('galleryPage.description')}
            </p>
            <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/85">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">
                <Sparkles className="h-4 w-4" />
                {t('galleryPage.badges.0')}
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">
                <Sparkles className="h-4 w-4" />
                {t('galleryPage.badges.1')}
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">
                <Sparkles className="h-4 w-4" />
                {t('galleryPage.badges.2')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
