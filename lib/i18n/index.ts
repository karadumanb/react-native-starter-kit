import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import tr from "./locales/tr.json";

//empty for now
const fallbackLng = "tr";

const locales = {
  tr: {
    translation: tr
  },
  en: {
    translation: tr
  },
};

export const initializeLocalization = () => {
  i18n.use(initReactI18next).init({
    resources: locales,
    //language to use if translations in user language are not available
    fallbackLng,
    interpolation: {
      escapeValue: false, // not needed for react!!
    },
  });
};
