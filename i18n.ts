import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './messages/en.json';
import sv from './messages/sv.json';

// Initialize i18next once on the client
if (!i18n.isInitialized) {
  i18n
    .use(initReactI18next)
    .init({
      resources: {
        en: {
          translation: en,
        },
        sv: {
          translation: sv,
        },
      },
      lng: 'en',
      fallbackLng: 'en',
      interpolation: {
        escapeValue: false,
      },
    })
    .catch((err) => {
      console.error('i18next init error', err);
    });
}

export default i18n;
