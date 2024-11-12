import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';

// Initialize i18n
i18n
  .use(HttpBackend) // Use HttpBackend to load translations from public folder
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    lng: 'en', // default language
    backend: {
      loadPath: '/locales/{{lng}}/common.json' // JSON files
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;