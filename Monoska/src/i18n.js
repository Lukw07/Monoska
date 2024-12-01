// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        "title": "Products by industry in 2017",
        "foodIndustry": "Food Industry",
        "otherEngineering": "Other Engineering Industry",
        "automotive": "Automotive",
        "meetOurTeam": "Meet Our Team",
        "position": "Position",
        "email": "Email",
        "phone": "Phone"
      },
    },
    de: {
     // i18n.js (doplnění pro nové texty)
de: {
    translation: {
      "title": "Produkte nach Branchen im Jahr 2017",
      "foodIndustry": "Lebensmittelindustrie",
      "otherEngineering": "Sonstige Ingenieurindustrie",
      "automotive": "Automotive",
      "foodIndustryDescription": "Maschinen, Linien und Komponenten für die Lebensmittelindustrie.",
      "otherEngineeringDescription": "Maschinen und Linien für andere Ingenieurindustrien.",
      "automotiveDescription": "Automobilproduktionstechnik.",
      "industryStats": "Branchenstatistiken",
      "foodIndustryStat": "Lebensmittelindustrie im Jahr 2017",
      "engineeringIndustryStat": "Ingenieurindustrie im Jahr 2017",
      "automotiveStat": "Automobilindustrie im Jahr 2017",
      "completedProjects": "Abgeschlossene Projekte",
      "reinvested": "Reinvestiert",
      "coffeeConsumed": "Kaffee konsumiert",
      "machinedParts": "Bearbeitete Teile",
    },
  },
  
    },
    fr: {
      translation: {
        "title": "Produits par industrie en 2017",
        "foodIndustry": "Industrie alimentaire",
        "otherEngineering": "Autres industries de l'ingénierie",
        "automotive": "Automobile",
        "meetOurTeam": "Rencontrez notre équipe",
        "position": "Position",
        "email": "Email",
        "phone": "Téléphone"
      },
    },
  },
  lng: "en", // default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
