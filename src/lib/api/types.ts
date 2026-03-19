/**
 * API Types
 * Common types used across the API client.
 */

export interface ApiRequestOptions extends Omit<RequestInit, 'body'> {
  body?: unknown;
  params?: Record<string, string | number | boolean | undefined>;
}

export interface ApiError {
  message: string;
  status?: number;
  code?: string;
  data?: any;
}
