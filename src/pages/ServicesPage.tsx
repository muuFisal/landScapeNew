import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Seo } from '@/components/ui/Seo';
import { getProjectsPath, services } from '@/data/services';
import { cn } from '@/utils/cn';

export function ServicesPage() {
  const { t, i18n } = useTranslation();
  const locale = i18n.language === 'ar' ? 'ar' : 'en';

  return (
    <>
      <Seo title={t('seo.services.title')} description={t('seo.services.description')} path="/services" />

      <section className="relative isolate flex min-h-[60vh] items-center overflow-hidden bg-black text-white">
        <img
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1800&q=80"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="container-shell relative py-32 pt-40 sm:py-36 sm:pt-48 lg:py-40 lg:pt-56">
          <AnimatedSection animation="down">
            <div className="max-w-4xl">
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-white/60">{t('servicesPage.eyebrow')}</p>
              <h1 className="mt-5 text-4xl font-semibold uppercase leading-[0.9] sm:text-6xl lg:text-[7.5rem]">{t('servicesPage.title')}</h1>
              <p className="mt-8 max-w-2xl text-base leading-8 text-white/82 sm:text-lg">{t('servicesPage.description')}</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-space bg-surface-muted">
        <div className="container-shell grid gap-8 lg:gap-10">
          {services.map((service, index) => {
            const title = t(`servicesData.${service.slug}.title`);
            const short = t(`servicesData.${service.slug}.short`);
            const description = t(`servicesData.${service.slug}.description`);

            return (
              <AnimatedSection key={service.slug} animation={index % 2 === 0 ? 'left' : 'right'}>
                <article className="h-full">
                  <Link
                    to={getProjectsPath(service.slug)}
                    className="group block h-full overflow-hidden rounded-[2rem] border border-black/5 bg-surface-strong outline-none transition duration-500 hover:-translate-y-1 hover:shadow-card focus-visible:ring-2 focus-visible:ring-brand-900/35 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-base dark:border-white/10"
                  >
                    <div className="grid items-center gap-0 lg:grid-cols-[1.02fr_0.98fr]">
                      <div className={cn('overflow-hidden bg-black/5', index % 2 === 1 && 'lg:order-2')}>
                        <img
                          src={service.image}
                          alt={title}
                          className={cn(
                            'aspect-[5/4] w-full object-cover transition duration-1000 group-hover:scale-[1.04] sm:aspect-[16/11] lg:aspect-[4/3]',
                            service.imagePositionClassName,
                          )}
                        />
                      </div>

                      <div className={cn('flex h-full flex-col justify-center p-6 sm:p-8 lg:p-10', index % 2 === 1 && 'lg:order-1')}>
                        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.34em] text-ink-500">0{index + 1}</p>
                        <h2 className="text-4xl font-semibold uppercase leading-tight text-ink-900 sm:text-5xl">{title}</h2>
                        <p className="mt-5 text-lg leading-8 text-ink-700">{short}</p>
                        <p className="mt-5 text-base leading-8 text-ink-600">{description}</p>
                        <span className="mt-8 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.14em] text-ink-900 transition group-hover:gap-4">
                          {t('common.viewProjects')}
                          <ArrowRight className={cn('h-4 w-4 transition-transform', locale === 'ar' ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1')} />
                        </span>
                      </div>
                    </div>
                  </Link>
                </article>
              </AnimatedSection>
            );
          })}

          <AnimatedSection animation="up" className="pt-4 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 rounded-full border border-ink-900 px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-ink-900 transition hover:bg-ink-900 hover:text-white focus-visible:ring-2 focus-visible:ring-brand-900/35 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-base"
            >
              {t('common.bookConsultation')}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
