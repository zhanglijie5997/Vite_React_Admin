
import LanguageDetector from 'i18next-browser-languagedetector';
import i18n from "i18next";
import en from "./en.json";
import zh from "./zh.json";
import { initReactI18next , useTranslation } from 'react-i18next';


export enum I18nName {
    name = 'name',
    home = 'home'
}

export const _i18n = () => {
    const { t, i18n } = useTranslation();
    return {
        Lng: t,
        i18n
    }
}

i18n.use(LanguageDetector).use(initReactI18next).init({
    resources: {
        'zh': {
            translation: zh
        },
        'en': {
            translation: en
        },
    },
    fallbackLng: "zh",
    debug: false,
    interpolation: {
        escapeValue: false,
    }
});

export default i18n;