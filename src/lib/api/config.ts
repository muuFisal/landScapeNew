/// <reference types="vite/client" />

/**
 * API Configuration
 * Responsible for loading and exporting environment-specific API settings.
 */

export const API_CONFIG = {
  // Uses Vite's import.meta.env for environment variables
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api',
  timeout: 10000, // Default timeout in milliseconds
} as const;
