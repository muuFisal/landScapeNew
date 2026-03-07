import { useTranslation } from 'react-i18next';
import { FAQItem } from '@/components/FAQItem';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { faqs } from '@/data/faqs';

export function FaqSection({ locale }: { locale: 'en' | 'ar' }) {
  const { t } = useTranslation();

  return (
    <AnimatedSection className="section-space bg-surface-muted/70" animation="scale">
      <div className="container-shell grid gap-10 lg:grid-cols-[0.86fr_1.14fr]">
        <div>
          <SectionHeading eyebrow={t('home.faq.eyebrow')} title={t('home.faq.title')} description={t('home.faq.description')} />
          <div className="surface-card overflow-hidden">
            <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=80" alt="Landscape architecture" className="h-80 w-full object-cover" />
          </div>
        </div>
        <div className="grid gap-4">
          {faqs.map((item) => (
            <FAQItem key={item.q.en} question={item.q[locale]} answer={item.a[locale]} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
