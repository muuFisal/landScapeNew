import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-black/5 bg-surface-muted py-20 text-ink-700 transition-colors duration-500 dark:border-white/5">
      <div className="container-shell grid gap-16 lg:grid-cols-[1.2fr_1fr_1.4fr]">
        <div className="space-y-8">
          <h3 className="font-display text-3xl font-semibold tracking-[0.16em] text-ink-900">MDO</h3>
          <p className="max-w-md text-base leading-relaxed text-ink-500">{t('footer.description')}</p>
        </div>
        <div>
          <h4 className="text-[11px] font-bold uppercase tracking-[0.3em] text-ink-300">{t('footer.links')}</h4>
          <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-5 text-sm font-medium">
            <NavLink to="/about" className="transition-colors hover:text-brand-900">{t('nav.about')}</NavLink>
            <NavLink to="/contact" className="transition-colors hover:text-brand-900">{t('nav.contact')}</NavLink>
            <NavLink to="/projects" className="transition-colors hover:text-brand-900">{t('nav.work')}</NavLink>
            <NavLink to="/faq" className="transition-colors hover:text-brand-900">{t('nav.faq')}</NavLink>
            <NavLink to="/services" className="transition-colors hover:text-brand-900">{t('nav.services')}</NavLink>
            <NavLink to="/terms" className="transition-colors hover:text-brand-900">{t('nav.terms')}</NavLink>
            <NavLink to="/gallery" className="transition-colors hover:text-brand-900">{t('nav.gallery')}</NavLink>
            <NavLink to="/privacy" className="transition-colors hover:text-brand-900">{t('nav.privacy')}</NavLink>
          </div>
        </div>
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-1 lg:gap-14">
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.3em] text-ink-300">{t('footer.contact')}</h4>
            <div className="mt-10 grid gap-4 text-sm font-medium">
              <p className="text-ink-700 transition-colors hover:text-brand-900 hover:cursor-pointer">hello@mdolandscape.com</p>
              <p className="text-ink-700 transition-colors hover:text-brand-900 hover:cursor-pointer">+971 50 000 0000</p>
              <p className="text-ink-700">Dubai · Abu Dhabi · Riyadh</p>
            </div>
          </div>
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.3em] text-ink-300">{t('footer.subscribe', 'Newsletter')}</h4>
            <div className="mt-10 flex w-full max-w-sm gap-2">
              <input
                type="email"
                placeholder={t('footer.emailPlaceholder', 'Email address')}
                className="flex-grow rounded-full border border-black/5 bg-surface-base px-5 py-3 text-sm outline-none transition focus:border-brand-400 dark:border-white/10"
              />
              <button className="rounded-full bg-ink-900 px-6 py-3 text-sm font-bold text-surface-base transition-all hover:scale-105 active:scale-95">
                {t('footer.subscribeButton', 'Join')}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container-shell mt-20 border-t border-black/5 pt-10 dark:border-white/5">
        <div className="flex flex-col items-center justify-between gap-6 text-[10px] font-bold uppercase tracking-[0.18em] text-ink-300 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} MDO Landscape. All rights reserved.
          </p>
          <p className="flex items-center gap-2">
            <span>Designed & Developed by</span>
            <a
              href="https://mohamed-fisal.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-black text-ink-900 transition-all hover:scale-110 hover:tracking-widest"
            >
              Mohamed Fisal
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
