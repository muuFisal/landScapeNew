import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Seo } from '@/components/ui/Seo';
import { services } from '@/data/services';

export function ServicesPage() {
  const { i18n } = useTranslation();
  const locale = i18n.language === 'ar' ? 'ar' : 'en';

  return (
    <>
      <Seo
        title={locale === 'ar' ? 'الخدمات | MDO Landscape' : 'Services | MDO Landscape'}
        description={
          locale === 'ar'
            ? 'تعرف على خدمات التصميم والتنفيذ والتطوير التي تقدمها MDO Landscape للمساحات الخارجية الراقية.'
            : 'Discover MDO Landscape services for outdoor design, build, renovation, and premium landscape delivery.'
        }
        path="/services"
      />

      <section className="relative isolate flex min-h-[60vh] items-center overflow-hidden bg-black text-white">
        <img
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1800&q=80"
          alt="Landscape services"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="container-shell relative py-32 pt-40 sm:py-36 sm:pt-48 lg:py-40 lg:pt-56">
          <AnimatedSection animation="down">
            <div className="max-w-4xl">
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-white/60">MDO Landscape</p>
              <h1 className="mt-5 text-4xl font-extrabold uppercase leading-[0.9] sm:text-6xl lg:text-[7.5rem]">
                {locale === 'ar' ? 'خدماتنا' : 'Our Services'}
              </h1>
              <p className="mt-8 max-w-2xl text-base leading-8 text-white/82 sm:text-lg">
                {locale === 'ar'
                  ? 'نقدم حلولًا متكاملة للمساحات الخارجية، بداية من الفكرة وحتى التنفيذ النهائي، مع عناية كبيرة بالتفاصيل والصورة النهائية للمشروع.'
                  : 'We deliver complete outdoor solutions from concept to final execution, with a strong focus on detail, atmosphere, and premium visual impact.'}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-space bg-surface-muted">
        <div className="container-shell grid gap-12">
          {services.map((service, index) => (
            <div key={service.slug} className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
              <AnimatedSection animation={index % 2 === 0 ? 'left' : 'right'} className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="overflow-hidden rounded-[10px] bg-black/5">
                  <img src={service.image} alt={service.title[locale]} className="aspect-[4/3] w-full object-cover transition duration-700 hover:scale-[1.04]" />
                </div>
              </AnimatedSection>

              <AnimatedSection animation={index % 2 === 0 ? 'right' : 'left'} className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div>
                  <p className="mb-4 text-xs font-semibold uppercase tracking-[0.34em] text-ink-500">0{index + 1}</p>
                  <h2 className="text-4xl font-extrabold uppercase leading-tight text-ink-900 sm:text-5xl">{service.title[locale]}</h2>
                  <p className="mt-5 text-lg leading-8 text-ink-700">{service.short[locale]}</p>
                  <p className="mt-5 text-base leading-8 text-ink-700">{service.description[locale]}</p>
                  <Link
                    to="/contact"
                    className="mt-8 inline-flex items-center gap-3 rounded-full border border-ink-900 px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-ink-900 transition hover:bg-ink-900 hover:text-white"
                  >
                    {locale === 'ar' ? 'اطلب الخدمة' : 'Request service'}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </AnimatedSection>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
