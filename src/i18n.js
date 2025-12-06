import i18next from "i18next";
import { initReactI18next } from 'react-i18next';
import ru from '../public/locales/language_ru/translation.json';
import uz from '../public/locales/language_uz/translation.json';
import en from '../public/locales/language_en/translation.json';

i18next
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        debug: true,

        resources: {
            ru: {
                translation: ru
            },
            uz: {
                translation: uz
            },
            en: {
                translation: en
            }
        },

        interpolation: {
            escapeValue: false,
        },
    })

export default i18next;