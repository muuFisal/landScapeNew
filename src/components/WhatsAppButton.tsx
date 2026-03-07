import { MessageCircle } from 'lucide-react';

export function WhatsAppButton({ label }: { label: string }) {
  return (
    <a
      href="https://wa.me/971500000000"
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
