import { useTranslation } from 'react-i18next';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Seo } from '@/components/ui/Seo';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function AboutPage() {
  const { t } = useTranslation();
  const values = t('about.values', { returnObjects: true }) as Array<{ title: string; body: string }>;

  return (
    <>
      <Seo title={t('seo.about.title')} description={t('seo.about.description')} path="/about" />
      <AnimatedSection className="section-space pt-24 lg:pt-32" animation="left">
        <div className="container-shell grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <SectionHeading eyebrow={t('about.eyebrow')} title={t('about.title')} description={t('about.description')} />
            <p className="text-base leading-8 text-ink-500">{t('about.story')}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="overflow-hidden rounded-lg sm:col-span-2">
              <img src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=1400&q=80" alt="Landscape design" className="h-72 w-full object-cover" />
            </div>
            <div className="overflow-hidden rounded-lg">
              <img src="https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80" alt="Landscape materials" className="h-56 w-full object-cover" />
            </div>
            <div className="overflow-hidden rounded-lg">
              <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80" alt="Garden construction" className="h-56 w-full object-cover" />
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-space bg-surface-muted/30" animation="left">
        <div className="container-shell grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-xl">
            <img
              src="https://images.unsplash.com/photo-1558905648-281944ecb3f7?auto=format&fit=crop&w=1400&q=80"
              alt="Our Mission"
              className="aspect-[4/5] w-full object-cover sm:aspect-video lg:aspect-[4/5]"
            />
          </div>
          <div className="flex flex-col justify-center py-6">
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-accent-400">{t('about.missionEyebrow')}</span>
            <h2 className="mt-6 text-4xl font-semibold leading-tight text-ink-900 sm:text-5xl">
              {t('about.missionTitle')}
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-ink-500">
              {t('about.missionDescription')}
            </p>
            <div className="mt-10 h-px w-20 bg-brand-900/20" />
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-space" animation="right">
        <div className="container-shell grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col justify-center py-6 lg:order-1">
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-accent-400">{t('about.visionEyebrow')}</span>
            <h2 className="mt-6 text-4xl font-semibold leading-tight text-ink-900 sm:text-5xl">
              {t('about.visionTitle')}
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-ink-500">
              {t('about.visionDescription')}
            </p>
            <div className="mt-10 h-px w-20 bg-brand-900/20" />
          </div>
          <div className="overflow-hidden rounded-xl lg:order-2">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80"
              alt="Our Vision"
              className="aspect-[4/5] w-full object-cover sm:aspect-video lg:aspect-[4/5]"
            />
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-space bg-surface-muted/70" animation="right">
        <div className="container-shell">
          <SectionHeading eyebrow={t('about.valuesEyebrow')} title={t('about.valuesTitle')} description={t('about.valuesDescription')} />
          <div className="grid gap-6 lg:grid-cols-3">
            {values.map((item) => (
              <article key={item.title} className="surface-card p-6">
                <h3 className="text-3xl font-semibold text-ink-900">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-ink-500">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
