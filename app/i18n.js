import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import trTranslation from './translations/trTranslation.json';
import deTranslation from './translations/deTranslation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      tr: { translation: trTranslation },
      de: { translation: deTranslation },
    },
    lng: 'tr', 
    fallbackLng: 'tr',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
