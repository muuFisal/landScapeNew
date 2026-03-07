import { useTranslation } from 'react-i18next';
import { Seo } from '@/components/ui/Seo';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function LegalPage({ type }: { type: 'terms' | 'privacy' }) {
  const { t } = useTranslation();
  const prefix = type === 'terms' ? 'terms' : 'privacy';

  return (
    <>
      <Seo title={t(`seo.${prefix}.title`)} description={t(`seo.${prefix}.description`)} path={`/${type}`} />
      <section className="section-space pt-24 lg:pt-32">
        <div className="container-shell max-w-4xl">
          <SectionHeading eyebrow={t(`${prefix}.eyebrow`)} title={t(`${prefix}.title`)} description={t(`${prefix}.description`)} />
          <div className="surface-card p-6 sm:p-10">
            <div className="space-y-10">
              {(t(`${prefix}.sections`, { returnObjects: true }) as { title: string; content: string }[]).map((section, index) => (
                <div key={index} className="space-y-4">
                  <h3 className="text-xl font-bold uppercase tracking-tight text-ink-900">{section.title}</h3>
                  <p className="text-base leading-8 text-ink-600">{section.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
