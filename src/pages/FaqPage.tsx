import { useTranslation } from 'react-i18next';
import { Seo } from '@/components/ui/Seo';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Accordion } from '@/components/ui/Accordion';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

export function FaqPage() {
  const { t } = useTranslation();

  const faqItems = t('faq.items', { returnObjects: true }) as { question: string; answer: string }[];

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
            <Accordion items={faqItems} />
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
