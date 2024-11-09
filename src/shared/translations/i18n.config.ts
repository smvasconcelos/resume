import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { resources } from 'shared/translations';

export const defaultNS = 'global';

i18n.use(initReactI18next).init({
  debug: process.env.NODE_ENV === 'development',
  fallbackLng: 'pt',
  interpolation: {
    escapeValue: false
  },
  ns: Object.keys(resources.pt),
  defaultNS,
  resources
});

export default i18n;
