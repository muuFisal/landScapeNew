import { apiClient } from '../client';
import type { BannersResponse } from '@/types/banners';

export const getBannersContent = () => {
  return apiClient.get<BannersResponse>('/banners');
};
