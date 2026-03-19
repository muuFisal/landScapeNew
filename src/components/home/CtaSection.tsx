import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

export function CtaSection() {
  const { t } = useTranslation();

  return (
    <AnimatedSection className="section-space" animation="right">
      <div className="container-shell">
        <div className="overflow-hidden rounded-xl bg-brand-900 px-6 py-10 text-white shadow-card sm:px-10 lg:grid lg:grid-cols-[1fr_auto] lg:items-center dark:bg-surface-strong dark:text-ink-900">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/60">MDO Landscape Studio</p>
            <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">{t('home.cta.title')}</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/75">{t('home.cta.description')}</p>
          </div>
          <div className="mt-8 lg:mt-0 lg:text-end">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-brand-900 transition hover:scale-[1.01] dark:bg-brand-700 dark:text-white">
              {t('common.bookConsultation')}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
