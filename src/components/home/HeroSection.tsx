import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { cn } from '@/utils/cn';
import { useBanners } from '@/hooks/useBanners';

export function HeroSection() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';
  const { banners, loading } = useBanners();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (banners.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [banners.length]);

  const hasBanners = banners.length > 0;
  const currentBanner = hasBanners ? banners[currentIndex] : null;

  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-black text-white">
      <AnimatePresence mode="popLayout">
        <motion.img
          key={currentBanner?.id || currentIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          src={currentBanner?.banner || "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1800&q=80"}
          alt={currentBanner?.title || ""}
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </AnimatePresence>
      <div className="hero-overlay absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_38%)]" />

      <div className="container-shell relative flex min-h-screen items-center justify-center pt-16 text-center">
        <motion.div
          key={currentBanner?.id || 'static'}
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="w-full"
        >
          <h1
            className={cn(
              'mx-auto w-full px-4 flex justify-center text-center text-3xl font-semibold leading-[0.95] text-white sm:text-5xl lg:text-[4.5rem] lg:whitespace-nowrap',
              !isArabic && 'uppercase'
            )}
          >
            {currentBanner?.title || t('home.hero.title')}
          </h1>

          <div className="mt-8 flex justify-center sm:mt-10">
            <div
              aria-label={t('home.hero.serviceHierarchy.ariaLabel')}
              className="inline-flex w-full max-w-[34rem] flex-col items-center rounded-[2rem] border border-white/12 bg-transparent px-5 py-5 shadow-card sm:px-8 sm:py-6"
            >
              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5">
                <span
                  className={cn(
                    'font-display text-[1.25rem] font-semibold text-white sm:text-[1.6rem]',
                    isArabic ? 'tracking-[0.08em]' : 'uppercase tracking-[0.32em]'
                  )}
                >
                  {currentBanner?.primary_label || t('home.hero.serviceHierarchy.primary.design')}
                </span>
                <span className="text-white/30 text-[1.25rem] sm:text-[1.6rem] font-light">|</span>
                <span
                  className={cn(
                    'font-display text-[1.25rem] font-semibold text-white sm:text-[1.6rem]',
                    isArabic ? 'tracking-[0.08em]' : 'uppercase tracking-[0.32em]'
                  )}
                >
                  {currentBanner?.secondary_label || t('home.hero.serviceHierarchy.primary.build')}
                </span>
              </div>

              <div className="flex w-full flex-col items-center gap-3 pt-4">
                <div className="h-5 w-px bg-white/18" />
                <div
                  className={cn(
                    'flex flex-wrap items-center justify-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5 text-white/78 sm:gap-4 sm:px-5',
                    isArabic ? 'text-sm font-medium' : 'text-[11px] font-semibold uppercase tracking-[0.34em] sm:text-xs'
                  )}
                >
                  {currentBanner?.sub_labels?.length ? (
                    currentBanner.sub_labels.map((subLabel, idx) => (
                      <div key={idx} className="flex items-center gap-3 sm:gap-4">
                        <span>{subLabel}</span>
                        {idx !== currentBanner.sub_labels.length - 1 && (
                          <span className="h-1 w-1 rounded-full bg-white/40" />
                        )}
                      </div>
                    ))
                  ) : (
                    <>
                      <span>{t('home.hero.serviceHierarchy.secondary.landscape')}</span>
                      <span className="h-1 w-1 rounded-full bg-white/40" />
                      <span>{t('home.hero.serviceHierarchy.secondary.pool')}</span>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
