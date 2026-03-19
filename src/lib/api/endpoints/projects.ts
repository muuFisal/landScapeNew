import { apiClient } from '../client';
import type { 
  WorkPageResponse, 
  ProjectsListResponse, 
  ProjectDetailsResponse,
  RelatedProjectsResponse
} from '@/types/projects';

export const getWorkPageContent = () => {
  return apiClient.get<WorkPageResponse>('/work-page');
};

export const getProjectsList = (params: { page?: number; per_page?: number; service?: string }) => {
  return apiClient.get<ProjectsListResponse>('/projects', { params });
};

export const getProjectDetails = (slug: string) => {
  return apiClient.get<ProjectDetailsResponse>(`/projects/${slug}`);
};

export const getRelatedProjects = (slug: string) => {
  return apiClient.get<RelatedProjectsResponse>(`/projects/${slug}/related`);
};
