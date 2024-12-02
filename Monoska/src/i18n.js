import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';

// Inicializace
i18n
  .use(HttpBackend) // Načítá překlady z externího souboru
  .use(LanguageDetector) // Automatická detekce jazyka
  .use(initReactI18next)
  .init({
    fallbackLng: 'cz', // Výchozí jazyk
    debug: true,
    interpolation: {
      escapeValue: false, // React už automaticky escapuje
    },
  });

export default i18n;
