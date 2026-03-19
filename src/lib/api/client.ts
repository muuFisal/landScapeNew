/**
 * API Client
 * Centralized HTTP client for all API interactions.
 * Automatically handles JSON mapping and setting current locale for Accept-Language headers.
 */
import i18n from '@/i18n';
import { API_CONFIG } from './config';
import { ApiRequestOptions, ApiError } from './types';

export class ApiClientError extends Error implements ApiError {
  status?: number;
  data?: any;

  constructor(message: string, status?: number, data?: any) {
    super(message);
    this.name = 'ApiClientError';
    this.status = status;
    this.data = data;
  }
}

/**
 * Normalizes query parameters, ignoring undefined keys.
 */
const stringifyParams = (params?: ApiRequestOptions['params']): string => {
  if (!params) return '';
  const urlParams = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined) {
      urlParams.append(key, String(value));
    }
  });
  const queryString = urlParams.toString();
  return queryString ? `?${queryString}` : '';
};

/**
 * Core fetch wrapper that intercepts every request to attach required headers.
 */
async function fetchClient<T>(endpoint: string, options: ApiRequestOptions = {}): Promise<T> {
  const { body, params, headers: customHeaders, ...restOptions } = options;

  // 1. DYNAMIC ACCEPT-LANGUAGE HEADER
  // Uses the current active language from i18next (e.g. 'en' or 'ar')
  const currentLang = i18n.language || 'en';

  const defaultHeaders: HeadersInit = {
    // 2. ACCEPT HEADER
    'Accept': 'application/json',
    'Accept-Language': currentLang,
  };

  // Add Content-Type if we're sending a JSON body
  if (body && !(body instanceof FormData)) {
    defaultHeaders['Content-Type'] = 'application/json';
  }

  const mergedHeaders = {
    ...defaultHeaders,
    ...customHeaders,
  };

  // 3. BASE URL RESOLUTION
  const queryString = stringifyParams(params);
  // Remove trailing slashes from config and leading slashes from endpoint
  const baseUrl = API_CONFIG.baseURL.replace(/\/$/, '');
  const path = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
  const url = `${baseUrl}${path}${queryString}`;

  const fetchOptions: RequestInit = {
    ...restOptions,
    headers: mergedHeaders,
  };

  if (body) {
    fetchOptions.body = body instanceof FormData ? body : JSON.stringify(body);
  }

  try {
    const response = await fetch(url, {
      ...fetchOptions,
      // Default to timeout handling, if not overridden
      signal: restOptions.signal || AbortSignal.timeout(API_CONFIG.timeout),
    });

    if (!response.ok) {
      let errorData;
      try {
        errorData = await response.json();
      } catch {
        errorData = { message: response.statusText };
      }
      throw new ApiClientError(
        errorData.message || 'API Request failed',
        response.status,
        errorData
      );
    }

    // Handle 204 No Content
    if (response.status === 204) {
      return null as T;
    }

    const data = await response.json();
    return data as T;
  } catch (error) {
    if (error instanceof ApiClientError) throw error;
    
    // Check if it's a native fetch abort/timeout error
    if (error instanceof DOMException) {
      if (error.name === 'TimeoutError') {
        throw new ApiClientError('Request timed out', 408);
      }
      if (error.name === 'AbortError') {
        throw new ApiClientError('Request was aborted', 499);
      }
    }

    throw new ApiClientError(
      error instanceof Error ? error.message : 'Unknown network error'
    );
  }
}

/**
 * Reusable API Client methods matching HTTP verbs.
 */
export const apiClient = {
  get: <T>(endpoint: string, options?: Omit<ApiRequestOptions, 'method'>) => {
    return fetchClient<T>(endpoint, { ...options, method: 'GET' });
  },

  post: <T>(endpoint: string, body?: unknown, options?: Omit<ApiRequestOptions, 'method' | 'body'>) => {
    return fetchClient<T>(endpoint, { ...options, body, method: 'POST' });
  },

  put: <T>(endpoint: string, body?: unknown, options?: Omit<ApiRequestOptions, 'method' | 'body'>) => {
    return fetchClient<T>(endpoint, { ...options, body, method: 'PUT' });
  },

  patch: <T>(endpoint: string, body?: unknown, options?: Omit<ApiRequestOptions, 'method' | 'body'>) => {
    return fetchClient<T>(endpoint, { ...options, body, method: 'PATCH' });
  },

  delete: <T>(endpoint: string, options?: Omit<ApiRequestOptions, 'method'>) => {
    return fetchClient<T>(endpoint, { ...options, method: 'DELETE' });
  },
};
