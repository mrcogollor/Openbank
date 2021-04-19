import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import XHR from 'i18next-xhr-backend';

import translationES from './locales/es/translation.json';
i18n
  .use(XHR)
  .use(LanguageDetector)
  .init({
    debug: true,
    lng: 'es',
    fallbackLng: 'es', // use en if detected lng is not available

    keySeparator: '.',

    interpolation: {
      escapeValue: false, // react already safes from xss
    },

    resources: {
      es: {
        translations: translationES,
      },
    },
    // have a common namespace used around the full app
    ns: ['translations'],
    defaultNS: 'translations',
  });

export default i18n;
