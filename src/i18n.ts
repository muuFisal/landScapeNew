import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const storageKey = 'landscape-lang';

/**
 * Ensures English is the default for first-time visitors.
 * Respects 'ar' only if explicitly saved in persistence.
 */
const getInitialLanguage = (): 'en' | 'ar' => {
  if (typeof window === 'undefined') return 'en';
  const stored = window.localStorage.getItem(storageKey);
  return stored === 'ar' ? 'ar' : 'en';
};

const initialLng = getInitialLanguage();

async function loadLocale(lng: 'en' | 'ar') {
  try {
    const response = await fetch(`/locales/${lng}/common.json`);
    if (!response.ok) throw new Error(`Failed to load locale: ${lng}`);
    return await response.json();
  } catch (error) {
    console.error(`i18n: Error loading ${lng} data:`, error);
    return {};
  }
}

export async function initI18n() {
  if (i18n.isInitialized) return i18n;

  // Pre-load both core translations
  const [en, ar] = await Promise.all([loadLocale('en'), loadLocale('ar')]);

  await i18n.use(initReactI18next).init({
    lng: initialLng,
    fallbackLng: 'en',
    resources: {
      en: { translation: en },
      ar: { translation: ar },
    },
    interpolation: {
      escapeValue: false,
    },
    // Maintain English as fallback if Arabic keys are missing or empty
    returnEmptyString: false,
  });

  i18n.on('languageChanged', (lng) => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(storageKey, lng);
    }
  });

  return i18n;
}

export default i18n;
