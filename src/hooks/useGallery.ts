import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { getGalleryPageContent, getGalleryItemsContent } from '@/lib/api/endpoints/gallery';
import type { GalleryPageData, GalleryItem, GalleryPagination } from '@/types/gallery';

export function useGalleryPage() {
  const { i18n } = useTranslation();
  const [data, setData] = useState<GalleryPageData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    const fetchContent = async () => {
      try {
        setLoading(true);
        const response = await getGalleryPageContent();
        if (mounted && response?.data) setData(response.data);
      } catch (err: any) {
        if (mounted) setError(err.message || 'Failed to load gallery page');
      } finally {
        if (mounted) setLoading(false);
      }
    };
    fetchContent();
    return () => { mounted = false; };
  }, [i18n.language]);

  return { data, loading, error };
}

export function useGalleryItems(page: number = 1, per_page: number = 12) {
  const { i18n } = useTranslation();
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [pagination, setPagination] = useState<GalleryPagination | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    const fetchContent = async () => {
      try {
        setLoading(true);
        const response = await getGalleryItemsContent(page, per_page);
        if (mounted && response?.data) {
          const sortedData = [...response.data].sort((a, b) => a.sort_order - b.sort_order);
          setItems(sortedData);
          if (response.pagination) setPagination(response.pagination);
        }
      } catch (err: any) {
        if (mounted) setError(err.message || 'Failed to load gallery items');
      } finally {
        if (mounted) setLoading(false);
      }
    };
    fetchContent();
    return () => { mounted = false; };
  }, [page, per_page, i18n.language]);

  return { items, pagination, loading, error };
}
