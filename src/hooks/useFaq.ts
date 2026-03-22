import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { getFaqContent } from '@/lib/api/endpoints/faq';
import type { FaqItem, FaqPagination } from '@/types/faq';

export function useFaq(page: number = 1) {
  const { i18n } = useTranslation();
  const [items, setItems] = useState<FaqItem[]>([]);
  const [pagination, setPagination] = useState<FaqPagination | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    const fetchContent = async () => {
      try {
        setLoading(true);
        const response = await getFaqContent(page);
        if (mounted && response?.data) {
          setItems(response.data);
          if (response.pagination) setPagination(response.pagination);
        }
      } catch (err: any) {
        if (mounted) setError(err.message || 'Failed to load FAQ content');
      } finally {
        if (mounted) setLoading(false);
      }
    };
    fetchContent();
    return () => { mounted = false; };
  }, [page, i18n.language]);

  return { items, pagination, loading, error };
}
