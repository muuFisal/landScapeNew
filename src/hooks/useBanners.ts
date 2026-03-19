import { useState, useEffect } from 'react';
import { getBannersContent } from '@/lib/api/endpoints/banners';
import type { BannerItem } from '@/types/banners';

export function useBanners() {
  const [banners, setBanners] = useState<BannerItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    const fetchContent = async () => {
      try {
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
  }, []);

  return { banners, loading, error };
}
