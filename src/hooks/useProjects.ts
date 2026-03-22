import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  getWorkPageContent, 
  getProjectsList, 
  getProjectDetails,
  getRelatedProjects 
} from '@/lib/api/endpoints/projects';
import type { 
  WorkPageData, 
  ProjectListItem, 
  ProjectsPagination,
  ProjectDetailsData 
} from '@/types/projects';

export function useWorkPage() {
  const { i18n } = useTranslation();
  const [data, setData] = useState<WorkPageData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    const fetchContent = async () => {
      try {
        setLoading(true);
        const response = await getWorkPageContent();
        if (mounted && response?.data) setData(response.data);
      } catch (err: any) {
        if (mounted) setError(err.message || 'Failed to load work page');
      } finally {
        if (mounted) setLoading(false);
      }
    };
    fetchContent();
    return () => { mounted = false; };
  }, [i18n.language]);

  return { data, loading, error };
}

export function useProjectsList(params: { page: number; per_page: number; service?: string }) {
  const { i18n } = useTranslation();
  const [projects, setProjects] = useState<ProjectListItem[]>([]);
  const [pagination, setPagination] = useState<ProjectsPagination | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    const fetchContent = async () => {
      try {
        setLoading(true);
        const cleanParams = Object.fromEntries(
            Object.entries(params).filter(([_, v]) => v !== undefined && v !== 'all')
        );
        const response = await getProjectsList(cleanParams);
        if (mounted && response?.data) {
          setProjects(response.data);
          if (response.pagination) setPagination(response.pagination);
        }
      } catch (err: any) {
        if (mounted) setError(err.message || 'Failed to load projects');
      } finally {
        if (mounted) setLoading(false);
      }
    };
    fetchContent();
    return () => { mounted = false; };
  }, [params.page, params.per_page, params.service, i18n.language]);

  return { projects, pagination, loading, error };
}

export function useProjectDetails(slug: string | undefined) {
  const { i18n } = useTranslation();
  const [project, setProject] = useState<ProjectDetailsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) {
      setLoading(false);
      return;
    }
    
    let mounted = true;
    const fetchContent = async () => {
      try {
        setLoading(true);
        const response = await getProjectDetails(slug);
        if (mounted && response?.data) {
          if (response.data.gallery) {
             response.data.gallery.sort((a,b) => a.sort_order - b.sort_order);
          }
          setProject(response.data);
        }
      } catch (err: any) {
        if (mounted) setError(err.message || 'Failed to load project details');
      } finally {
        if (mounted) setLoading(false);
      }
    };
    fetchContent();
    return () => { mounted = false; };
  }, [slug, i18n.language]);

  return { project, loading, error };
}

export function useRelatedProjects(slug: string | undefined) {
  const { i18n } = useTranslation();
  const [related, setRelated] = useState<ProjectListItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) {
      setLoading(false);
      return;
    }

    let mounted = true;
    const fetchContent = async () => {
      try {
        setLoading(true);
        const response = await getRelatedProjects(slug);
        if (mounted && response?.data) {
          setRelated(response.data);
        }
      } catch (err: any) {
        if (mounted) setError(err.message || 'Failed to load related projects');
      } finally {
        if (mounted) setLoading(false);
      }
    };
    fetchContent();
    return () => { mounted = false; };
  }, [slug, i18n.language]);

  return { related, loading, error };
}
