import type { ReactNode } from 'react';
import { Footer } from './Footer';
import { Navbar } from './Navbar';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { useTranslation } from 'react-i18next';
import { ScrollToTopOnRouteChange } from '@/components/ui/ScrollToTopOnRouteChange';
import { ScrollToTopButton } from '@/components/ui/ScrollToTopButton';

export function MainLayout({ children }: { children: ReactNode }) {
  const { t } = useTranslation();

  return (
    <div className="flex min-h-screen flex-col bg-surface-base font-body text-ink-900 transition-colors duration-700">
      <ScrollToTopOnRouteChange />
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
      <WhatsAppButton label={t('common.whatsapp')} />
      <ScrollToTopButton />
    </div>
  );
}
