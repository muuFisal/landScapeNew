import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
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
  const { i18n } = useTranslation();
  const [settings, setSettings] = useState<SettingsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    const fetchSettings = async () => {
      try {
        setLoading(true);
        const response = await getSettings();
        if (mounted && response?.data) {
          const data = response.data;
          setSettings(data);
          
          import('@/lib/seo/updateSiteMeta').then(({ updateSiteMeta }) => {
              updateSiteMeta({ settings: data });
          });
        }
      } catch (err: any) {
        if (mounted) {
          const isTimeout = err.status === 408 || err.message?.includes('time');
          console.warn(`[Settings] Fallback mode active: ${isTimeout ? 'Backend timeout' : 'Backend unreachable or failed'}`);
          setError(isTimeout ? 'timeout' : 'error');
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
  }, [i18n.language]);

  return (
    <SettingsContext.Provider value={{ settings, loading, error }}>
      {children}
    </SettingsContext.Provider>
  );
};
