import { useTranslation } from 'react-i18next';
import { Seo } from '@/components/ui/Seo';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Accordion } from '@/components/ui/Accordion';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { useFaq } from '@/hooks/useFaq';

export function FaqPage() {
  const { t } = useTranslation();
  const { items, loading } = useFaq();

  const faqItemsFallback = t('faq.items', { returnObjects: true }) as { question: string; answer: string }[];
  const displayedItems = items.length > 0 ? items : (loading ? [] : faqItemsFallback);

  return (
    <>
      <Seo 
        title={t('faq.title') + ' | MDO Landscape'} 
        description={t('faq.description')} 
        path="/faq" 
      />
      
      <section className="section-space pt-24 lg:pt-32">
        <div className="container-shell max-w-4xl">
          <AnimatedSection animation="up">
            <SectionHeading 
              eyebrow={t('faq.eyebrow')} 
              title={t('faq.title')} 
              description={t('faq.description')} 
            />
          </AnimatedSection>
          
          <AnimatedSection animation="up" className="mt-12">
            {loading && displayedItems.length === 0 ? (
              <div className="animate-pulse space-y-4">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="h-16 w-full rounded-2xl bg-surface-muted dark:bg-white/5" />
                ))}
              </div>
            ) : (
              <Accordion items={displayedItems} />
            )}
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
