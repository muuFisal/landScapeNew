import { apiClient } from '../client';
import type { GalleryPageResponse, GalleryItemsResponse } from '@/types/gallery';

export const getGalleryPageContent = () => {
  return apiClient.get<GalleryPageResponse>('/gallery-page');
};

export const getGalleryItemsContent = (page: number = 1, per_page: number = 12) => {
  return apiClient.get<GalleryItemsResponse>('/gallery-items', { params: { page, per_page } });
};
