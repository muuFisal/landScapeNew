import { useState, useEffect } from 'react';
import { getServicesPageContent, getServicesContent } from '@/lib/api/endpoints/services';
import type { ServicesPageData, ServiceItem } from '@/types/services';

export function useServicesPage() {
  const [data, setData] = useState<ServicesPageData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    const fetchContent = async () => {
      try {
        const response = await getServicesPageContent();
        if (mounted && response?.data) setData(response.data);
      } catch (err: any) {
        if (mounted) setError(err.message || 'Failed to load services page');
      } finally {
        if (mounted) setLoading(false);
      }
    };
    fetchContent();
    return () => { mounted = false; };
  }, []);

  return { data, loading, error };
}

export function useServices() {
  const [services, setServices] = useState<ServiceItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    const fetchContent = async () => {
      try {
        const response = await getServicesContent();
        if (mounted && response?.data) {
          const activeServices = response.data
            .filter(s => s.status)
            .sort((a, b) => a.sort_order - b.sort_order);
          setServices(activeServices);
        }
      } catch (err: any) {
        if (mounted) setError(err.message || 'Failed to load services');
      } finally {
        if (mounted) setLoading(false);
      }
    };
    fetchContent();
    return () => { mounted = false; };
  }, []);

  return { services, loading, error };
}
