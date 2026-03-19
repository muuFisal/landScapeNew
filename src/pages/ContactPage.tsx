import { useState } from 'react';
import { Github, Instagram, Linkedin, Mail, MapPin, Phone, Twitter, Youtube, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Seo } from '@/components/ui/Seo';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { useSettings } from '@/context/SettingsContext';
import { useContactSubmit } from '@/hooks/useContactSubmit';

const socialIconsMap: Record<string, React.ReactNode> = {
  facebook: <Twitter className="h-5 w-5" />, // Note: Using Twitter or maybe standard `lucide-react` Facebook exists, let's use a generic link or X for twitter. Wait `lucide-react` has Facebook. 
  // Let me just import Facebook
  x: <Twitter className="h-5 w-5" />,
  youtube: <Youtube className="h-5 w-5" />,
  instagram: <Instagram className="h-5 w-5" />,
  tiktok: <Twitter className="h-5 w-5" />, // fallback icon
  linkedin: <Linkedin className="h-5 w-5" />,
};

export function ContactPage() {
  const { t } = useTranslation();
  const { settings } = useSettings();
  const { submit, loading, success, error } = useContactSubmit();
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'Website Inquiry',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const isSuccess = await submit(formData);
    if (isSuccess) {
      setFormData({ name: '', phone: '', email: '', subject: 'Website Inquiry', message: '' });
    }
  };

  const phone = settings?.phone || '+971 50 000 0000';
  const email = settings?.email || 'hello@mdolandscape.com';
  const address = settings?.address || 'Dubai · Abu Dhabi · Riyadh';

  const socials = settings?.socials || {};
  const activeSocials = Object.entries(socials).filter(([_, url]) => url && url.trim() !== '');

  return (
    <>
      <Seo title={t('seo.contact.title')} description={t('seo.contact.description')} path="/contact" />
      <AnimatedSection className="section-space pt-24 lg:pt-32" animation="up">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading eyebrow={t('contact.eyebrow')} title={t('contact.title')} description={t('contact.description')} />
            <div className="grid gap-4">
              {[
                { icon: Phone, title: t('contact.phone'), body: phone },
                { icon: Mail, title: t('contact.email'), body: email },
                { icon: MapPin, title: t('contact.location'), body: address },
              ].map((item) => (
                <div key={item.title} className="surface-card flex items-start gap-4 p-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-700 dark:bg-white/5 dark:text-brand-500">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-ink-900">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-ink-500">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {activeSocials.length > 0 && (
              <div className="mt-10 flex flex-wrap items-center gap-4">
                {activeSocials.map(([key, url]) => (
                  <a
                    key={key}
                    href={url as string}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-black/5 bg-surface-base text-ink-500 transition-all hover:border-brand-200 hover:bg-brand-50 hover:text-brand-900 hover:shadow-soft dark:border-white/10 dark:hover:border-brand-900/40 dark:hover:bg-brand-900/10 dark:hover:text-brand-400"
                    aria-label={`Follow us on ${key}`}
                  >
                    {key === 'facebook' ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                    ) : socialIconsMap[key] || <Github className="h-5 w-5" />}
                  </a>
                ))}
              </div>
            )}
          </div>
          <div id="form" className="surface-card scroll-mt-28 p-6 sm:p-8">
            <h2 className="font-display text-3xl font-semibold text-ink-900">{t('contact.formTitle')}</h2>
            <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
              {success && (
                <div className="flex items-center gap-3 rounded-lg bg-green-50 p-4 text-sm font-medium text-green-800 dark:bg-green-500/10 dark:text-green-400">
                  <CheckCircle2 className="h-5 w-5" />
                  {t('contact.form.success', 'Your message has been sent successfully.')}
                </div>
              )}
              {error && (
                <div className="flex items-center gap-3 rounded-lg bg-red-50 p-4 text-sm font-medium text-red-800 dark:bg-red-500/10 dark:text-red-400">
                  <AlertCircle className="h-5 w-5 shrink-0" />
                  {error}
                </div>
              )}
              
              <label className="grid gap-2 text-sm font-medium text-ink-700">
                {t('contact.form.name')}
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="rounded-md border border-black/5 bg-surface-base px-4 py-3 outline-none transition focus:border-brand-400 dark:border-white/10" 
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-ink-700">
                {t('contact.form.phone')}
                <input 
                  type="tel" 
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="rounded-md border border-black/5 bg-surface-base px-4 py-3 outline-none transition focus:border-brand-400 dark:border-white/10" 
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-ink-700">
                {t('contact.form.email')}
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="rounded-md border border-black/5 bg-surface-base px-4 py-3 outline-none transition focus:border-brand-400 dark:border-white/10" 
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-ink-700">
                {t('contact.form.message')}
                <textarea 
                  rows={5} 
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="rounded-md border border-black/5 bg-surface-base px-4 py-3 outline-none transition focus:border-brand-400 dark:border-white/10" 
                />
              </label>
              
              <button 
                type="submit" 
                disabled={loading}
                className="mt-2 inline-flex w-fit items-center justify-center gap-2 rounded-full bg-brand-700 px-5 py-3 text-sm font-semibold text-white shadow-card transition hover:bg-brand-800 disabled:opacity-70"
              >
                {loading && <Loader2 className="h-4 w-4 animate-spin" />}
                {t('contact.form.submit')}
              </button>
            </form>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
