import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import Backend from "i18next-http-backend"
import { DateTime } from "luxon"

i18n
  // loads translations from your server
  .use(Backend)
  // detect user language
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
      format: (value, format, lng) => {
        // legacy usage
        if (value instanceof Date) {
          return DateTime.fromJSDate(value)
            .setLocale(lng)
            .toLocaleString(DateTime[format])
        }
        return value
      }
    }
  })

if (i18n.services.formatter !== undefined) {
  i18n.services.formatter.add("DATE_HUGE", (value, lng) => {
    return DateTime.fromJSDate(value)
      .setLocale(lng)
      .toLocaleString(DateTime.DATE_HUGE)
  })
}

export default i18n
