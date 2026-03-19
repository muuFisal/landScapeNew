import { apiClient } from '../client';
import type { ContactFormData, ContactResponse } from '@/types/contact';

export const submitContactForm = (data: ContactFormData) => {
  const formData = new FormData();
  Object.entries(data).forEach(([key, value]) => {
    formData.append(key, value);
  });
  
  return apiClient.post<ContactResponse>('/contact', formData);
};
