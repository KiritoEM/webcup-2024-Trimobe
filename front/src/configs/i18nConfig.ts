import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import languageDetector from "i18next-browser-languagedetector";
import frTranslation from "../helpers/fr";
import enTranslation from "../helpers/en";

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: "en",
    resources: {
      en: {
        translation: enTranslation,
      },
      fr: {
        translation: frTranslation,
      },
    },
  });
