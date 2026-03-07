import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/utils/cn';

export function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <article className="surface-card overflow-hidden">
      <button
        className="flex w-full items-center justify-between gap-4 p-5 text-start sm:p-6"
        onClick={() => setOpen((value) => !value)}
      >
        <span className="text-lg font-semibold text-ink-900">{question}</span>
        <ChevronDown className={cn('h-5 w-5 shrink-0 transition', open && 'rotate-180')} />
      </button>
      <div className={cn('grid transition-all duration-300', open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]')}>
        <div className="overflow-hidden px-5 pb-5 text-sm leading-7 text-ink-500 sm:px-6 sm:pb-6">{answer}</div>
      </div>
    </article>
  );
}
