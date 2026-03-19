/// <reference types="vite/client" />

/**
 * API Configuration
 * Responsible for loading and exporting environment-specific API settings.
 */

export const API_CONFIG = {
  // Uses Vite's import.meta.env for environment variables
  baseURL: import.meta.env.VITE_API_BASE_URL || 'https://landscape-backend.test/api',
  timeout: 15000, // Increased timeout to 15s to support slow dev environments
} as const;
