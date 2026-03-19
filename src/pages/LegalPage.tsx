import { useTranslation } from 'react-i18next';
import { Seo } from '@/components/ui/Seo';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { useLegal } from '@/hooks/useLegal';

export function LegalPage({ type }: { type: 'terms' | 'privacy' }) {
  const { t } = useTranslation();
  const prefix = type === 'terms' ? 'terms' : 'privacy';
  const { data, loading } = useLegal(type);

  return (
    <>
      <Seo title={t(`seo.${prefix}.title`)} description={t(`seo.${prefix}.description`)} path={`/${type}`} />
      <section className="section-space pt-24 lg:pt-32">
        <div className="container-shell max-w-4xl">
          <SectionHeading 
            eyebrow={t(`${prefix}.eyebrow`)} 
            title={data?.title || t(`${prefix}.title`)} 
            description={t(`${prefix}.description`)} 
          />
          {data?.banner && (
            <div className="mb-12 overflow-hidden rounded-2xl">
               <img src={data.banner} alt={data.title} className="h-48 w-full object-cover sm:h-64" />
            </div>
          )}
          <div className="surface-card p-6 sm:p-10">
            {loading ? (
              <div className="animate-pulse space-y-4">
                <div className="h-4 rounded bg-ink-200 w-3/4"></div>
                <div className="h-4 rounded bg-ink-200 w-full"></div>
                <div className="h-4 rounded bg-ink-200 w-5/6"></div>
              </div>
            ) : data?.description ? (
              <div 
                className="space-y-6 text-base leading-8 text-ink-600 [&>p]:mb-4 [&>h2]:mt-8 [&>h2]:text-xl [&>h2]:font-semibold [&>h2]:text-ink-900 [&>h3]:mt-6 [&>h3]:text-lg [&>h3]:font-semibold [&>h3]:text-ink-900 [&>ul]:list-outside [&>ul]:list-disc [&>ul]:pl-5 [&>li]:mt-2"
                dangerouslySetInnerHTML={{ __html: data.description }} 
              />
            ) : (
              <div className="space-y-10">
                {(t(`${prefix}.sections`, { returnObjects: true }) as { title: string; content: string }[]).map((section, index) => (
                  <div key={index} className="space-y-4">
                    <h3 className="text-xl font-semibold uppercase tracking-tight text-ink-900">{section.title}</h3>
                    <p className="text-base leading-8 text-ink-600">{section.content}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
