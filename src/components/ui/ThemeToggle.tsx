import { Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import { cn } from '@/utils/cn';

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();

  // Resolve visual theme for the icon
  const isDark =
    theme === 'dark' ||
    (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      animate={{ rotate: isDark ? 0 : 0 }} // Could add rotation here if desired
      onClick={toggleTheme}
      className={cn(
        'relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-black/5 text-ink-900 transition-all duration-500 hover:bg-black/10 sm:h-10 sm:w-10',
        'dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10',
        className
      )}
      aria-label="Toggle theme"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={isDark ? 'dark' : 'light'}
          initial={{ y: 10, rotate: 45, opacity: 0, scale: 0.8 }}
          animate={{ y: 0, rotate: 0, opacity: 1, scale: 1 }}
          exit={{ y: -10, rotate: -45, opacity: 0, scale: 0.8 }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0, 0.2, 1]
          }}
          className="relative h-5 w-5 sm:h-6 sm:w-6"
        >
          {isDark ? (
            <Moon className="h-full w-full" strokeWidth={1.5} />
          ) : (
            <Sun className="h-full w-full" strokeWidth={1.5} />
          )}
        </motion.div>
      </AnimatePresence>
    </motion.button>
  );
}
