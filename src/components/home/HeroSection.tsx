import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { cn } from '@/utils/cn';

export function HeroSection() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-black text-white">
      <img
        src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1800&q=80"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="hero-overlay absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_38%)]" />

      <div className="container-shell relative flex min-h-screen items-end justify-center pb-24 text-center sm:pb-28 lg:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="w-full"
        >
          <h1
            className={cn(
              'mx-auto max-w-5xl text-center text-5xl font-semibold leading-[0.95] text-balance text-white sm:text-7xl lg:text-[7.5rem]',
              !isArabic && 'uppercase'
            )}
          >
            {t('home.hero.title')}
          </h1>

          <div className="mt-8 flex justify-center sm:mt-10">
            <div
              aria-label={t('home.hero.serviceHierarchy.ariaLabel')}
              className="inline-flex w-full max-w-[34rem] flex-col items-center rounded-[2rem] border border-white/12 bg-black/20 px-5 py-5 shadow-card backdrop-blur-md sm:px-8 sm:py-6"
            >
              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5">
                <span
                  className={cn(
                    'font-display text-[1.25rem] font-semibold text-white sm:text-[1.6rem]',
                    isArabic ? 'tracking-[0.08em]' : 'uppercase tracking-[0.32em]'
                  )}
                >
                  {t('home.hero.serviceHierarchy.primary.design')}
                </span>
                <span className="h-px w-8 bg-white/30 sm:w-12" />
                <span
                  className={cn(
                    'font-display text-[1.25rem] font-semibold text-white sm:text-[1.6rem]',
                    isArabic ? 'tracking-[0.08em]' : 'uppercase tracking-[0.32em]'
                  )}
                >
                  {t('home.hero.serviceHierarchy.primary.build')}
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
                  <span>{t('home.hero.serviceHierarchy.secondary.landscape')}</span>
                  <span className="h-1 w-1 rounded-full bg-white/40" />
                  <span>{t('home.hero.serviceHierarchy.secondary.pool')}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
