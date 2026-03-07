import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { services } from '@/data/services';

export function HomeServicesSection() {
  const { i18n } = useTranslation();
  const locale = i18n.language === 'ar' ? 'ar' : 'en';

  return (
    <section id="services" className="section-space bg-surface-muted">
      <div className="container-shell">
        <AnimatedSection animation="up">
          <div className="mb-16 max-w-3xl">

            <h2 className="mt-4 text-4xl font-semibold uppercase leading-tight text-ink-900 sm:text-5xl lg:text-6xl">
              {locale === 'ar' ? 'الخدمات التي نقدمها' : 'Services we provide'}
            </h2>
            <p className="mt-6 text-lg leading-8 text-ink-700">
              {locale === 'ar'
                ? 'نحن نقدم حلاً متكاملاً لتصميم وتنفيذ المساحات الخارجية الفاخرة، مع التركيز على الجودة والتفاصيل الدقيقة.'
                : 'We deliver comprehensive solutions for luxury outdoor spaces, merging architectural precision with natural elegance through a boutique studio experience.'}
            </p>
          </div>
        </AnimatedSection>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <AnimatedSection
              key={service.slug}
              animation="up"
              delay={index * 0.12}
              className="h-full"
            >
              <Link
                to="/services"
                className="group relative flex h-full min-h-[440px] flex-col overflow-hidden rounded-xl bg-surface-strong border border-black/5 dark:border-white/5 shadow-sm transition-all duration-700 hover:shadow-2xl hover:-translate-y-2"
              >
                <div className="absolute inset-0 z-0">
                  <img
                    src={service.image}
                    alt={service.title[locale]}
                    className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80" />
                </div>

                <div className="relative z-10 mt-auto flex flex-col p-8">
                  <div className="mb-4 h-px w-12 bg-white/30 transition-all duration-700 group-hover:w-full group-hover:bg-white/50" />
                  <h3 className="text-3xl font-semibold uppercase tracking-tight text-white sm:text-3xl">
                    {service.title[locale]}
                  </h3>
                  <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-white/70 transition-colors duration-700 group-hover:text-white/90">
                    {service.short[locale]}
                  </p>
                  <div className="mt-8 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-white">
                    <span>{locale === 'ar' ? 'اكتشف المزيد' : 'Learn more'}</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-700 group-hover:translate-x-2" />
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="up" className="mt-16 text-center lg:mt-20">
          <Link
            to="/services"
            className="inline-flex items-center gap-4 rounded-full bg-ink-900 px-10 py-5 text-sm font-bold uppercase tracking-[0.2em] text-surface-base transition-all duration-500 hover:scale-105 hover:shadow-xl active:scale-95"
          >
            {locale === 'ar' ? 'عرض كل الخدمات' : 'Explore full services'}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
