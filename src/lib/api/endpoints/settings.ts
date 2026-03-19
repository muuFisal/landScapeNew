import { apiClient } from '../client';
import type { SettingsResponse } from '@/types/settings';

export const getSettings = async () => {
  return apiClient.get<SettingsResponse>('/settings');
};
