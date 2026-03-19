import { apiClient } from '../client';
import type { FaqResponse } from '@/types/faq';

export const getFaqContent = (page: number = 1) => {
  return apiClient.get<FaqResponse>('/faq', { params: { page } });
};
