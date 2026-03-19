import { cn } from '@/utils/cn';

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  inverse = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  inverse?: boolean;
}) {
  return (
    <div className={cn('mb-10 max-w-3xl', align === 'center' && 'mx-auto text-center', inverse && 'text-white')}>
      {eyebrow ? (
        <p className={cn('mb-4 text-[11px] font-semibold uppercase tracking-[0.32em]', inverse ? 'text-white/60' : 'text-ink-500')}>{eyebrow}</p>
      ) : null}
      <h2 className={cn('font-display text-3xl font-semibold leading-none text-balance sm:text-4xl lg:text-5xl', inverse ? 'text-white' : 'text-ink-900')}>{title}</h2>
      {description ? <p className={cn('mt-4 text-base leading-8', inverse ? 'text-white/82' : 'text-ink-500')}>{description}</p> : null}
    </div>
  );
}
