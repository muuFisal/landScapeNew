import { MessageCircle } from 'lucide-react';
import { useSettings } from '@/context/SettingsContext';

export function WhatsAppButton({ label }: { label: string }) {
  const { settings } = useSettings();

  const formattedWhatsApp = settings?.whatsapp
    ? `https://wa.me/${settings.whatsapp.replace(/\D/g, '')}`
    : 'https://wa.me/';

  if (!settings?.whatsapp) return null; // Wait for settings or don't render if no whatsapp

  return (
    <a
      href={formattedWhatsApp}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="fixed bottom-5 z-40 inline-flex items-center gap-2 rounded-full bg-brand-700 px-4 py-3 text-sm font-semibold text-white shadow-card transition hover:scale-[1.02] right-5"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline">{label}</span>
    </a>
  );
}
