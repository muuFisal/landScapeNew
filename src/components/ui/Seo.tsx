import { useEffect } from 'react';
import { useSettings } from '@/context/SettingsContext';
import { updateSiteMeta } from '@/lib/seo/updateSiteMeta';

export function Seo({ title, description, path }: { title: string; description: string; path: string }) {
  const { settings } = useSettings();

  useEffect(() => {
    updateSiteMeta({
       settings: settings || undefined,
       pageTitle: title,
       pageDesc: description,
       pagePath: path
    });
  }, [description, path, title, settings]);

  return null;
}
