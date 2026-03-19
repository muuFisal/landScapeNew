import { apiClient } from '../client';
import type { AboutResponse } from '@/types/about';

export const getAboutContent = () => {
  return apiClient.get<AboutResponse>('/about-us');
};
