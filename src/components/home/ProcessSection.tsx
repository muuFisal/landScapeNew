import { ArrowRight, CheckCircle2, Layers3, ShieldCheck } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { SectionHeading } from '@/components/ui/SectionHeading';

type ProcessStep = { title: string; body: string };

export function ProcessSection({ process }: { process: ProcessStep[] }) {
  const { t } = useTranslation();

  const highlights = [
    { icon: Layers3, title: t('home.process.highlights.curated.title'), body: t('home.process.highlights.curated.body') },
    { icon: ShieldCheck, title: t('home.process.highlights.delivery.title'), body: t('home.process.highlights.delivery.body') },
    { icon: CheckCircle2, title: t('home.process.highlights.details.title'), body: t('home.process.highlights.details.body') },
  ];

  return (
    <AnimatedSection className="section-space bg-brand-900 text-white dark:bg-surface-strong dark:text-ink-900" animation="up">
      <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <SectionHeading inverse eyebrow={t('home.process.eyebrow')} title={t('home.process.title')} description={t('home.process.description')} />
          <div className="grid gap-4">
            {highlights.map((item) => (
              <div key={item.title} className="rounded-[28px] border border-white/10 bg-white/5 p-5 backdrop-blur-md dark:border-black/5 dark:bg-surface-muted">
                <item.icon className="mb-3 h-6 w-6 text-accent-400 dark:text-brand-500" />
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-white/75 dark:text-ink-500">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="grid gap-4">
          {process.map((step, index) => (
            <div key={step.title} className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-md dark:border-black/5 dark:bg-surface-muted">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent-300 text-sm font-semibold text-brand-900 dark:bg-brand-100 dark:text-brand-700">{index + 1}</div>
              <h3 className="font-display text-3xl font-semibold">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/75 dark:text-ink-500">{step.body}</p>
            </div>
          ))}
          <div className="pt-2">
            <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-accent-300 transition hover:gap-3 dark:text-brand-600">
              {t('common.bookConsultation')}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
