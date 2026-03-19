import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { getProjectsPath, services } from '@/data/services';
import { cn } from '@/utils/cn';

export function HomeServicesSection() {
  const { i18n, t } = useTranslation();
  const locale = i18n.language === 'ar' ? 'ar' : 'en';

  return (
    <section id="services" className="section-space bg-surface-muted">
      <div className="container-shell">
        <AnimatedSection animation="up">
          <div className="mb-16 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-ink-500">{t('home.services.eyebrow')}</p>
            <h2 className="mt-4 text-3xl font-semibold uppercase leading-tight text-ink-900 sm:text-4xl lg:text-5xl">{t('home.services.title')}</h2>
            <p className="mt-6 text-lg leading-8 text-ink-700">{t('home.services.description')}</p>
          </div>
        </AnimatedSection>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const title = t(`servicesData.${service.slug}.title`);
            const short = t(`servicesData.${service.slug}.short`);

            return (
              <AnimatedSection key={service.slug} animation="up" delay={index * 0.12} className="h-full">
                <Link
                  to={getProjectsPath(service.slug)}
                  className="group relative flex h-full min-h-[440px] flex-col overflow-hidden rounded-xl border border-black/5 bg-surface-strong shadow-sm outline-none transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl focus-visible:ring-2 focus-visible:ring-brand-900/35 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-base dark:border-white/5"
                >
                  <div className="absolute inset-0 z-0">
                    <img
                      src={service.image}
                      alt={title}
                      className={cn('h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110', service.imagePositionClassName)}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-85" />
                  </div>

                  <div className="relative z-10 mt-auto flex flex-col p-8">
                    <div className="mb-4 h-px w-12 bg-white/30 transition-all duration-700 group-hover:w-full group-hover:bg-white/50" />
                    <h3 className="text-3xl font-semibold uppercase tracking-tight text-white">{title}</h3>
                    <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-white/74 transition-colors duration-700 group-hover:text-white/90">{short}</p>
                    <div className="mt-8 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-white">
                      <span>{t('common.viewProjects')}</span>
                      <ArrowRight className={cn('h-4 w-4 transition-transform duration-700', locale === 'ar' ? 'group-hover:-translate-x-2' : 'group-hover:translate-x-2')} />
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            );
          })}
        </div>

        <AnimatedSection animation="up" className="mt-16 text-center lg:mt-20">
          <Link
            to="/services"
            className="inline-flex items-center gap-4 rounded-full bg-ink-900 px-10 py-5 text-sm font-bold uppercase tracking-[0.2em] text-surface-base transition-all duration-500 hover:scale-105 hover:shadow-xl active:scale-95 focus-visible:ring-2 focus-visible:ring-brand-900/35 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-muted"
          >
            {t('home.services.sectionCta')}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
