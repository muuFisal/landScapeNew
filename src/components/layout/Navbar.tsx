import { Menu, X, Globe } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { cn } from '@/utils/cn';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

type NavItem = { label: string; to?: string; href?: string };

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, i18n } = useTranslation();
  const menuRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();

  const isHeroPage = ['/', '/services', '/gallery'].includes(location.pathname);

  const links: NavItem[] = [
    { to: '/projects', label: t('nav.work') },
    { to: '/about', label: t('nav.about') },
    { to: '/services', label: t('nav.services') },
    { to: '/gallery', label: t('nav.gallery') },
    { to: '/contact', label: t('nav.contact') },
    { href: 'mailto:hello@mdolandscape.com', label: t('nav.joinUs') },
  ];

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

  const headerStyles = cn(
    'fixed top-0 left-0 right-0 z-50 transition-all duration-700',
    showBackground
      ? 'border-b border-black/5 bg-surface-base/80 py-2 backdrop-blur-xl shadow-soft dark:border-white/10'
      : 'border-b border-transparent bg-transparent py-4'
  );

  const textClass = showBackground ? 'text-ink-900' : 'text-white';
  const navItemClass = cn(
    'text-sm font-medium transition hover:scale-105 active:scale-95',
    showBackground ? 'text-ink-700 hover:text-brand-900' : 'text-white/80 hover:text-white'
  );

  return (
    <header className={headerStyles}>
      <div ref={menuRef} className="relative">
        <div className="container-shell flex h-16 items-center justify-between gap-4 transition-all duration-700">
          <Link to="/" className={cn('font-display text-[1.8rem] font-semibold tracking-[0.2em] transition-all sm:text-[2.2rem]', textClass)}>
            MDO
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {links.map((link) =>
              link.to ? (
                <NavLink
                  key={link.label}
                  to={link.to}
                  className={({ isActive }) => cn(navItemClass, isActive && (showBackground ? 'text-brand-900 font-bold' : 'text-white font-bold'))}
                >
                  {link.label}
                </NavLink>
              ) : (
                <a key={link.label} href={link.href} className={navItemClass}>
                  {link.label}
                </a>
              ),
            )}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <ThemeToggle className={showBackground ? '' : 'border-white/20 bg-white/10 text-white hover:bg-white/20'} />

            <button
              onClick={toggleLanguage}
              className={cn(
                'inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] transition hover:scale-105 active:scale-95',
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
                'rounded-full border p-2.5 transition active:scale-95',
                showBackground ? 'border-black/5 text-ink-900' : 'border-white/15 text-white'
              )}
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle navigation menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <div className={cn(
          'overflow-hidden border-t transition-all duration-700 lg:hidden',
          showBackground ? 'border-black/5 bg-surface-base' : 'border-white/10 bg-black/95',
          open ? 'max-h-[35rem] opacity-100' : 'max-h-0 opacity-0'
        )}>
          <div className="container-shell grid gap-4 py-8">
            <Link to="/" onClick={() => setOpen(false)} className={cn('text-lg font-bold tracking-wide', showBackground ? 'text-ink-900' : 'text-white')}>
              {t('nav.home')}
            </Link>
            {links.map((link) =>
              link.to ? (
                <NavLink
                  key={link.label}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) => cn(
                    'text-base font-medium transition-colors',
                    showBackground ? 'text-ink-700' : 'text-white/80',
                    isActive && (showBackground ? 'text-brand-900' : 'text-white font-bold')
                  )}
                >
                  {link.label}
                </NavLink>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn('text-base font-medium', showBackground ? 'text-ink-700' : 'text-white/80')}
                >
                  {link.label}
                </a>
              ),
            )}
            <div className="mt-4 flex flex-col gap-4">
              <button
                onClick={toggleLanguage}
                className={cn(
                  'inline-flex w-fit items-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold tracking-wider transition',
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
