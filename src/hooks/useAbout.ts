import { useState, useEffect } from 'react';
import { getAboutContent } from '@/lib/api/endpoints/about';
import type { AboutData } from '@/types/about';

export function useAbout() {
  const [data, setData] = useState<AboutData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    const fetchContent = async () => {
      try {
        const response = await getAboutContent();
        if (mounted && response?.data) {
          setData(response.data);
        }
      } catch (err: any) {
        if (mounted) setError(err.message || 'Failed to load about content');
      } finally {
        if (mounted) setLoading(false);
      }
    };
    fetchContent();
    return () => { mounted = false; };
  }, []);

  return { data, loading, error };
}
