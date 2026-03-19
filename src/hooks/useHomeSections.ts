import { useState, useEffect } from 'react';
import { getWhyChooseContent, getRequestServiceContent } from '@/lib/api/endpoints/home-sections';
import type { WhyChooseData, RequestServiceData } from '@/types/home-sections';

export function useWhyChoose() {
  const [data, setData] = useState<WhyChooseData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    const fetchContent = async () => {
      try {
        const response = await getWhyChooseContent();
        if (mounted && response?.data) {
          
          // Sort items by sort_order
          if (response.data.items) {
            response.data.items.sort((a, b) => a.sort_order - b.sort_order);
          }
          
          setData(response.data);
        }
      } catch (err: any) {
        if (mounted) setError(err.message || 'Failed to load why-choose content');
      } finally {
        if (mounted) setLoading(false);
      }
    };
    fetchContent();
    return () => { mounted = false; };
  }, []);

  return { data, loading, error };
}

export function useRequestService() {
  const [data, setData] = useState<RequestServiceData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    const fetchContent = async () => {
      try {
        const response = await getRequestServiceContent();
        if (mounted && response?.data) {
          setData(response.data);
        }
      } catch (err: any) {
        if (mounted) setError(err.message || 'Failed to load request-service content');
      } finally {
        if (mounted) setLoading(false);
      }
    };
    fetchContent();
    return () => { mounted = false; };
  }, []);

  return { data, loading, error };
}
