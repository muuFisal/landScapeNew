import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import type { SettingsData } from '@/types/settings';
import { getSettings } from '@/lib/api/endpoints/settings';

interface SettingsContextType {
  settings: SettingsData | null;
  loading: boolean;
  error: string | null;
}

const SettingsContext = createContext<SettingsContextType>({
  settings: null,
  loading: true,
  error: null,
});

export const useSettings = () => useContext(SettingsContext);

export const SettingsProvider = ({ children }: { children: ReactNode }) => {
  const [settings, setSettings] = useState<SettingsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    const fetchSettings = async () => {
      try {
        const response = await getSettings();
        if (mounted && response?.data) {
          const data = response.data;
          setSettings(data);
          
          if (data.media?.favicon) {
            let link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
            if (!link) {
                link = document.createElement('link');
                link.rel = 'icon';
                document.head.appendChild(link);
            }
            link.href = data.media.favicon;
          }
        }
      } catch (err: any) {
        if (mounted) {
          console.error('Failed to load settings:', err);
          setError(err.message || 'Error fetching settings');
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    fetchSettings();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <SettingsContext.Provider value={{ settings, loading, error }}>
      {children}
    </SettingsContext.Provider>
  );
};
