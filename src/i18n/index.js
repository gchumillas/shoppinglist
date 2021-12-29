import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import * as Localization from 'expo-localization'
import resources from './translations'

i18n
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    lng: Localization.locale,
    fallbackLng: 'en',
    defaultNS: 'default',
    resources: {
      en: { default: resources.en },
      es: { default: resources.es }
    },
    interpolation: {
      escapeValue: false
    },
    react: {
      useSuspense: false
    },
    parseMissingKeyHandler: key => `[${key}]`
  })

export default i18n
