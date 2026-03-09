import { Globe, Instagram, Menu, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { siteLinks } from '@/data/site';
import { cn } from '@/utils/cn';

type RouteNavKey = 'home' | 'work' | 'about' | 'services' | 'gallery' | 'contact';

type NavAction =
  | { type: 'route'; key: RouteNavKey; to: string; end?: boolean }
  | { type: 'external'; key: 'instagram'; href: string };

const navActions: NavAction[] = [
  { type: 'route', key: 'home', to: '/', end: true },
  { type: 'route', key: 'work', to: '/projects' },
  { type: 'route', key: 'about', to: '/about' },
  { type: 'route', key: 'services', to: '/services' },
  { type: 'route', key: 'gallery', to: '/gallery' },
  { type: 'route', key: 'contact', to: '/contact' },
  { type: 'external', key: 'instagram', href: siteLinks.instagram },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, i18n } = useTranslation();
  const menuRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();

  const isHeroPage = ['/', '/services', '/gallery'].includes(location.pathname);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event: MouseEvent | TouchEvent) => {
      if (!menuRef.current) return;
      const target = event.target as Node;
      if (!menuRef.current.contains(target)) setOpen(false);
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('touchstart', handlePointerDown);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('touchstart', handlePointerDown);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [open]);

  const toggleLanguage = async () => {
    await i18n.changeLanguage(i18n.language === 'ar' ? 'en' : 'ar');
  };

  const showBackground = isScrolled || !isHeroPage;
  const focusRingClass = showBackground ? 'focus-visible:ring-brand-900/40 focus-visible:ring-offset-surface-base' : 'focus-visible:ring-white/60 focus-visible:ring-offset-transparent';

  const headerStyles = cn(
    'fixed top-0 left-0 right-0 z-50 transition-all duration-700',
    showBackground
      ? 'border-b border-black/5 bg-surface-base/80 py-2 backdrop-blur-xl shadow-soft dark:border-white/10'
      : 'border-b border-transparent bg-transparent py-4'
  );

  const textClass = showBackground ? 'text-ink-900' : 'text-white';
  const navItemClass = cn(
    'rounded-full px-1 py-1 text-sm font-medium outline-none transition hover:scale-105 active:scale-95 focus-visible:ring-2 focus-visible:ring-offset-2',
    focusRingClass,
    showBackground ? 'text-ink-700 hover:text-brand-900' : 'text-white/80 hover:text-white'
  );
  const instagramButtonClass = cn(
    'inline-flex h-10 w-10 items-center justify-center rounded-full border outline-none transition hover:scale-105 active:scale-95 focus-visible:ring-2 focus-visible:ring-offset-2',
    focusRingClass,
    showBackground
      ? 'border-brand-900/15 text-ink-700 hover:border-brand-900/35 hover:text-brand-900'
      : 'border-white/15 text-white/82 hover:border-white/35 hover:bg-white/10 hover:text-white'
  );
  const mobileLinkClass = cn(
    'rounded-2xl px-1 py-1 text-base font-medium outline-none transition-colors focus-visible:ring-2 focus-visible:ring-offset-2',
    focusRingClass,
    showBackground ? 'text-ink-700' : 'text-white/80'
  );

  return (
    <header className={headerStyles}>
      <div ref={menuRef} className="relative">
        <div className="container-shell flex h-16 items-center justify-between gap-4 transition-all duration-700">
          <Link
            to="/"
            className={cn(
              'font-display text-[1.8rem] font-semibold tracking-[0.2em] outline-none transition-all focus-visible:ring-2 focus-visible:ring-offset-2 sm:text-[2.2rem]',
              textClass,
              focusRingClass
            )}
          >
            MDO
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {navActions.map((action) =>
              action.type === 'route' ? (
                <NavLink
                  key={action.key}
                  to={action.to}
                  end={action.end}
                  className={({ isActive }) => cn(navItemClass, isActive && (showBackground ? 'font-bold text-brand-900' : 'font-bold text-white'))}
                >
                  {t(`nav.${action.key}`)}
                </NavLink>
              ) : (
                <a
                  key={action.key}
                  href={action.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={t('nav.instagramAriaLabel')}
                  className={instagramButtonClass}
                >
                  <Instagram className="h-4 w-4" />
                </a>
              )
            )}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <ThemeToggle className={showBackground ? '' : 'border-white/20 bg-white/10 text-white hover:bg-white/20'} />

            <button
              onClick={toggleLanguage}
              className={cn(
                'inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] outline-none transition hover:scale-105 active:scale-95 focus-visible:ring-2 focus-visible:ring-offset-2',
                focusRingClass,
                showBackground ? 'border-brand-900/20 text-ink-900 hover:border-brand-900/40' : 'border-white/15 text-white hover:border-white/40'
              )}
            >
              <Globe className="h-3.5 w-3.5" />
              {i18n.language === 'ar' ? 'EN' : 'AR'}
            </button>
          </div>

          <div className="flex items-center gap-3 lg:hidden">
            <ThemeToggle className={showBackground ? '' : 'border-white/20 bg-white/10 text-white hover:bg-white/20'} />

            <button
              className={cn(
                'rounded-full border p-2.5 outline-none transition active:scale-95 focus-visible:ring-2 focus-visible:ring-offset-2',
                focusRingClass,
                showBackground ? 'border-black/5 text-ink-900' : 'border-white/15 text-white'
              )}
              onClick={() => setOpen((value) => !value)}
              aria-label="Toggle navigation menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <div
          className={cn(
            'overflow-hidden border-t transition-all duration-700 lg:hidden',
            showBackground ? 'border-black/5 bg-surface-base' : 'border-white/10 bg-black/95',
            open ? 'max-h-[35rem] opacity-100' : 'max-h-0 opacity-0'
          )}
        >
          <div className="container-shell grid gap-4 py-8">
            {navActions.map((action) =>
              action.type === 'route' ? (
                <NavLink
                  key={action.key}
                  to={action.to}
                  end={action.end}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) => cn(mobileLinkClass, isActive && (showBackground ? 'font-semibold text-brand-900' : 'font-bold text-white'))}
                >
                  {t(`nav.${action.key}`)}
                </NavLink>
              ) : (
                <a
                  key={action.key}
                  href={action.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  onClick={() => setOpen(false)}
                  aria-label={t('nav.instagramAriaLabel')}
                  className={cn(
                    'inline-flex items-center gap-3 rounded-2xl px-1 py-1 text-base font-medium outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
                    focusRingClass,
                    showBackground ? 'text-ink-700' : 'text-white/80'
                  )}
                >
                  <Instagram className="h-4 w-4" />
                  <span>{t('nav.instagram')}</span>
                </a>
              )
            )}

            <div className="mt-4 flex flex-col gap-4">
              <button
                onClick={toggleLanguage}
                className={cn(
                  'inline-flex w-fit items-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold tracking-wider outline-none transition focus-visible:ring-2 focus-visible:ring-offset-2',
                  focusRingClass,
                  showBackground ? 'border-black/10 text-ink-900' : 'border-white/15 text-white'
                )}
              >
                <Globe className="h-4 w-4" />
                {i18n.language === 'ar' ? 'English' : 'العربية'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
