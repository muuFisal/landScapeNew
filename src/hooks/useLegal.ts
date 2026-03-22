import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { getPrivacyContent, getTermsContent } from '@/lib/api/endpoints/legal';
import type { LegalData } from '@/types/legal';

export function useLegal(type: 'privacy' | 'terms') {
  const { i18n } = useTranslation();
  const [data, setData] = useState<LegalData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    const fetchContent = async () => {
      try {
        setLoading(true);
        const req = type === 'privacy' ? getPrivacyContent() : getTermsContent();
        const response = await req;
        if (mounted && response?.data) {
          setData(response.data);
        }
      } catch (err: any) {
        if (mounted) setError(err.message || `Failed to load ${type} content`);
      } finally {
        if (mounted) setLoading(false);
      }
    };
    fetchContent();
    return () => { mounted = false; };
  }, [type, i18n.language]);

  return { data, loading, error };
}
