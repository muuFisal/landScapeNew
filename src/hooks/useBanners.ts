import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { getBannersContent } from '@/lib/api/endpoints/banners';
import type { BannerItem } from '@/types/banners';

export function useBanners() {
  const { i18n } = useTranslation();
  const [banners, setBanners] = useState<BannerItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    const fetchContent = async () => {
      try {
        setLoading(true);
        const response = await getBannersContent();
        if (mounted && response?.data) {
          const activeBanners = response.data
            .filter(b => b.status)
            .sort((a, b) => a.sort_order - b.sort_order);
          setBanners(activeBanners);
        }
      } catch (err: any) {
        if (mounted) setError(err.message || 'Failed to load banners');
      } finally {
        if (mounted) setLoading(false);
      }
    };
    fetchContent();
    return () => { mounted = false; };
  }, [i18n.language]);

  return { banners, loading, error };
}
