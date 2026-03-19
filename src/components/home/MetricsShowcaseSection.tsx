import { useTranslation } from 'react-i18next';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { SectionHeading } from '@/components/ui/SectionHeading';

type Metric = { value: string; label: string };

export function MetricsShowcaseSection({ metrics }: { metrics: Metric[] }) {
  const { t } = useTranslation();

  const features = t('home.process.highlights', { returnObjects: true }) as {
    curated: { title: string; body: string };
    delivery: { title: string; body: string };
    details: { title: string; body: string };
  };

  return (
    <AnimatedSection className="section-space bg-surface-muted/60" animation="right">
      <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <SectionHeading eyebrow={t('home.metrics.eyebrow')} title={t('home.metrics.title')} description={t('home.metrics.description')} />
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {metrics.map((metric) => (
              <div key={metric.label} className="surface-card p-5 lg:p-6">
                <div className="font-display text-3xl font-semibold text-ink-900">{metric.value}</div>
                <p className="mt-2 text-sm text-ink-500">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="grid gap-5">
          <div className="overflow-hidden rounded-lg">
            <img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=80" alt="Luxury landscape detail" className="h-[420px] w-full object-cover grayscale" />
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {[features.curated, features.delivery, features.details].map((item) => (
              <article key={item.title} className="surface-card p-6">
                <h3 className="font-display text-3xl font-semibold text-ink-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-ink-500">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
