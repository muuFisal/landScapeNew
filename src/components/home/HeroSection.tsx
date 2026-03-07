import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { ButtonLink } from '@/components/ui/Button';

type Metric = { value: string; label: string };

export function HeroSection({ metrics }: { metrics: Metric[] }) {
  const { t } = useTranslation();

  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden border-b border-black/10 bg-black text-white dark:border-white/10">
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=2200&q=80"
          alt="Luxury landscape background"
          loading="eager"
          className="h-full w-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_40%)]" />

      <div className="container-shell relative flex min-h-[100svh] flex-col justify-between gap-10 pb-8 pt-28 sm:pb-10 sm:pt-32 lg:pb-12 lg:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85 }}
          className="max-w-4xl"
        >
          <p className="text-[11px] font-medium uppercase tracking-[0.42em] text-white/58 sm:text-xs">
            {t('home.hero.eyebrow')}
          </p>
          <h1 className="mt-6 max-w-5xl font-display text-5xl font-semibold leading-[0.88] text-white sm:text-6xl lg:text-7xl xl:text-[6rem]">
            {t('home.hero.title')}
          </h1>
          <p className="mt-6 max-w-2xl text-sm leading-7 text-white/74 sm:text-base sm:leading-8 lg:text-lg">
            {t('home.hero.description')}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink to="/contact" className="bg-white text-black hover:bg-white/90">
              {t('common.startProject')}
              <ArrowRight className="h-4 w-4" />
            </ButtonLink>
            <a
              href="#work-grid"
              className="inline-flex items-center justify-center rounded-full border border-white/18 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              {t('common.exploreProjects')}
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.15 }}
          className="grid gap-4 border-t border-white/12 pt-6 sm:grid-cols-3 sm:pt-8"
        >
          {metrics.map((metric, index) => (
            <div key={metric.label} className="rounded-[22px] border border-white/12 bg-white/[0.04] p-5 backdrop-blur-sm">
              <div className="font-display text-3xl font-semibold sm:text-[2.4rem]">{metric.value}</div>
              <p className="mt-2 text-sm leading-6 text-white/65">{metric.label}</p>
              <div className="mt-4 h-px w-full bg-white/10" />
              <p className="mt-3 text-[11px] uppercase tracking-[0.3em] text-white/36">
                0{index + 1}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
