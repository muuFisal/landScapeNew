import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';

type Theme = 'light' | 'dark' | 'system';

type ThemeContextValue = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);
const storageKey = 'landscape-theme';

function getInitialTheme(): Theme {
  if (typeof window === 'undefined') return 'system';
  const stored = window.localStorage.getItem(storageKey) as Theme | null;
  if (stored === 'light' || stored === 'dark' || stored === 'system') return stored;
  return 'system';
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(getInitialTheme);

  // Handle setting theme and persisting it
  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    window.localStorage.setItem(storageKey, newTheme);
  };

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add('no-transition');

    // Remove no-transition class after mount
    const timeout = setTimeout(() => {
      root.classList.remove('no-transition');
    }, 0);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const root = document.documentElement;

    const applyTheme = (t: Theme) => {
      let resolvedTheme: 'light' | 'dark' = 'light';

      if (t === 'system') {
        resolvedTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      } else {
        resolvedTheme = t;
      }

      root.classList.remove('light', 'dark');
      root.classList.add(resolvedTheme);
    };

    applyTheme(theme);

    // Listen for system preference changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      if (theme === 'system') {
        applyTheme('system');
      }
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      toggleTheme: () => {
        setThemeState((current) => {
          let next: Theme;
          if (current === 'system') {
            next = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'light' : 'dark';
          } else {
            next = current === 'dark' ? 'light' : 'dark';
          }
          window.localStorage.setItem(storageKey, next);
          return next;
        });
      },
    }),
    [theme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
}
