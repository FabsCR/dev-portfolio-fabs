import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

async function initializeI18n() {
  if (typeof window !== 'undefined') {
    const HttpBackend = await import('i18next-http-backend'); // Dynamic import for client-side only
    i18n.use(HttpBackend.default); // Use .default for the default export
  }

  i18n
    .use(initReactI18next)
    .init({
      fallbackLng: 'en',
      lng: 'en', // Default language
      backend: {
        loadPath: '/locales/{{lng}}/common.json', // JSON file path
      },
      interpolation: {
        escapeValue: false,
      },
      react: {
        useSuspense: true,
      },
    });
}

initializeI18n(); // Initialize i18n

export default i18n;