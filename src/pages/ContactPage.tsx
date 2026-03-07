import { Mail, MapPin, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Seo } from '@/components/ui/Seo';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function ContactPage() {
  const { t } = useTranslation();

  return (
    <>
      <Seo title={t('seo.contact.title')} description={t('seo.contact.description')} path="/contact" />
      <AnimatedSection className="section-space pt-24 lg:pt-32" animation="up">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading eyebrow={t('contact.eyebrow')} title={t('contact.title')} description={t('contact.description')} />
            <div className="grid gap-4">
              {[
                { icon: Phone, title: t('contact.phone'), body: '+971 50 000 0000' },
                { icon: Mail, title: t('contact.email'), body: 'hello@mdolandscape.com' },
                { icon: MapPin, title: t('contact.location'), body: 'Dubai · Abu Dhabi · Riyadh' },
              ].map((item) => (
                <div key={item.title} className="surface-card flex items-start gap-4 p-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-700 dark:bg-white/5 dark:text-brand-500">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-ink-900">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-ink-500">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="surface-card p-6 sm:p-8">
            <h2 className="font-display text-4xl font-semibold text-ink-900">{t('contact.formTitle')}</h2>
            <form className="mt-6 grid gap-4">
              {[
                { label: t('contact.form.name'), type: 'text' },
                { label: t('contact.form.phone'), type: 'tel' },
                { label: t('contact.form.email'), type: 'email' },
              ].map((field) => (
                <label key={field.label} className="grid gap-2 text-sm font-medium text-ink-700">
                  {field.label}
                  <input type={field.type} className="rounded-2xl border border-black/5 bg-surface-base px-4 py-3 outline-none transition focus:border-brand-400 dark:border-white/10" />
                </label>
              ))}
              <label className="grid gap-2 text-sm font-medium text-ink-700">
                {t('contact.form.message')}
                <textarea rows={5} className="rounded-2xl border border-black/5 bg-surface-base px-4 py-3 outline-none transition focus:border-brand-400 dark:border-white/10" />
              </label>
              <button type="button" className="mt-2 inline-flex w-fit items-center justify-center rounded-full bg-brand-700 px-5 py-3 text-sm font-semibold text-white shadow-card transition hover:bg-brand-800">
                {t('contact.form.submit')}
              </button>
            </form>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
