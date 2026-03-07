import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { cn } from '@/utils/cn';

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        'relative inline-flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-300 active:scale-95 sm:h-10 sm:w-10',
        'border-black/10 bg-black/5 text-ink-900 hover:bg-black/10',
        'dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10',
        className
      )}
      aria-label="Toggle theme"
    >
      <div className="relative h-5 w-5 sm:h-6 sm:w-6">
        <Sun
          className={cn(
            'absolute inset-0 rotate-0 scale-100 transition-all duration-500',
            theme === 'dark' ? '-rotate-90 scale-0' : 'rotate-0 scale-100'
          )}
        />
        <Moon
          className={cn(
            'absolute inset-0 rotate-90 scale-0 transition-all duration-500',
            theme === 'dark' ? 'rotate-0 scale-100' : 'rotate-90 scale-0'
          )}
        />
      </div>
    </button>
  );
}
