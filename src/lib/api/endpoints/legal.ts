import { apiClient } from '../client';
import type { LegalResponse } from '@/types/legal';

export const getPrivacyContent = () => {
  return apiClient.get<LegalResponse>('/privacy');
};

export const getTermsContent = () => {
  return apiClient.get<LegalResponse>('/terms');
};
