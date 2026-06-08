import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import hi from './locales/hi.json';

const savedLocale = localStorage.getItem('app-locale');

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    hi: { translation: hi },
  },
  lng: savedLocale === 'hi' ? 'hi' : 'en',
  fallbackLng: 'en',
});

i18n.on('languageChanged', (locale) => {
  localStorage.setItem('app-locale', locale);
});

export default i18n;
