import { apiClient } from '../client';
import type { ServicesPageResponse, ServicesResponse } from '@/types/services';

export const getServicesPageContent = () => {
  return apiClient.get<ServicesPageResponse>('/services-page');
};

export const getServicesContent = () => {
  return apiClient.get<ServicesResponse>('/services');
};
