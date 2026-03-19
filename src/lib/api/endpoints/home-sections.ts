import { apiClient } from '../client';
import type { WhyChooseResponse, RequestServiceResponse } from '@/types/home-sections';

export const getWhyChooseContent = () => {
  return apiClient.get<WhyChooseResponse>('/why-choose');
};

export const getRequestServiceContent = () => {
  return apiClient.get<RequestServiceResponse>('/request-service');
};
