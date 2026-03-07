import type { LucideIcon } from 'lucide-react';

export function ServiceCard({
  icon: Icon,
  title,
  body,
  stat,
}: {
  icon: LucideIcon;
  title: string;
  body: string;
  stat: string;
}) {
  return (
    <article className="surface-card p-6 lg:p-8">
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-white dark:bg-white dark:text-black">
          <Icon className="h-6 w-6" />
        </div>
        <span className="rounded-full border border-black/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-ink-500 dark:border-white/10">
          {stat}
        </span>
      </div>
      <h3 className="mt-7 font-display text-4xl font-semibold text-ink-900">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-ink-500">{body}</p>
    </article>
  );
}
