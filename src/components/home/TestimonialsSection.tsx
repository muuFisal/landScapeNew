import { useTranslation } from 'react-i18next';
import { TestimonialCard } from '@/components/TestimonialCard';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { testimonials } from '@/data/testimonials';

export function TestimonialsSection({ locale }: { locale: 'en' | 'ar' }) {
  const { t } = useTranslation();

  return (
    <AnimatedSection className="section-space" animation="center">
      <div className="container-shell">
        <SectionHeading eyebrow={t('home.testimonials.eyebrow')} title={t('home.testimonials.title')} description={t('home.testimonials.description')} align="center" />
        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <TestimonialCard key={item.name} quote={item.quote[locale]} name={item.name} role={item.role[locale]} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
