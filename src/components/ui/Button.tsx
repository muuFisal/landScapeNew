import type { ButtonHTMLAttributes } from 'react';
import { Link, type LinkProps } from 'react-router-dom';
import { cn } from '@/utils/cn';

const base = 'inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-500';

export function ButtonLink({ className, ...props }: LinkProps & { className?: string }) {
  const hasTextColor = className?.includes('text-');
  return <Link className={cn(base, 'bg-brand-900 shadow-card hover:bg-brand-700', !hasTextColor && 'text-white', className)} {...props} />;
}

export function GhostLink({ className, ...props }: LinkProps & { className?: string }) {
  const hasTextColor = className?.includes('text-');
  return <Link className={cn(base, 'soft-border bg-surface-strong hover:bg-surface-muted', !hasTextColor && 'text-ink-900', className)} {...props} />;
}

export function Button({ className, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  const hasTextColor = className?.includes('text-');
  return <button className={cn(base, 'bg-brand-900 shadow-card hover:bg-brand-700', !hasTextColor && 'text-white', className)} {...props} />;
}
