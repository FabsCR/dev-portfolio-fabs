import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

async function initializeI18n() {
  if (typeof window !== 'undefined') {
    // Only load HttpBackend on the client side
    const { default: HttpBackend } = await import('i18next-http-backend');
    i18n.use(HttpBackend);
  }

  // Initialize i18n with the default language and backend settings
  return i18n
    .use(initReactI18next)
    .init({
      fallbackLng: 'en',
      lng: 'en',
      backend: {
        loadPath: '/locales/{{lng}}/common.json', // JSON files
      },
      interpolation: {
        escapeValue: false,
      },
      react: {
        useSuspense: true, // Ensure Suspense is used for translations
      },
    });
}

// Call initializeI18n and log success or catch any initialization errors
initializeI18n()
  .then(() => console.log("i18n initialized successfully"))
  .catch(error => console.error("i18n initialization error:", error));

export default i18n;